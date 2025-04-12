*** Settings ***
Library    Browser
Library    FakerLibrary

*** Variables ***
${URL}        http://127.0.0.1:5501/
${WIDTH}      1200     
${HEIGHT}     800
${BROWSER}    chromium
${HEADLESS}   false  

*** Keywords ***
Abrir a página do formulário
    New Browser    browser=${BROWSER}    headless=${HEADLESS}
    New Context    viewport={"width": ${WIDTH}, "height": ${HEIGHT}}
    New Page       ${URL}
    ${title}       Get Title
    Should Be Equal As Strings    ${title}    Interactive Card
    Log            ${title}

Preencher o formulário
    ${nome}    FakerLibrary.Name
    ${numero}   FakerLibrary.Random Number    digits=16
    ${mes}      Set Variable    09
    ${ano}      Set Variable    32
    ${cvc}      FakerLibrary.Random Number    digits=3

    Log To Console    Nome gerado: ${nome}
    Log To Console    Cartão gerado: ${numero}

    Type Text    id=name      ${nome}
    Type Text    id=number    ${numero}
    Type Text    id=month     ${mes}
    Type Text    id=year      ${ano}
    Type Text    id=cvc       ${cvc}


Confirmar envio
    Get Element States     id=confirm-button     validate    value & visible
    Click    id=confirm-button
    

Validar mensagem de sucesso
    Wait For Elements State    xpath=//h3[contains(text(), "THANK YOU!")]    visible
    ${elemento}    Get Element    xpath=//h3[contains(text(), "THANK YOU!")]
    ${mensagem_sucesso}       Get Text      ${elemento}
    Should Be Equal    ${mensagem_sucesso}    THANK YOU!
    Highlight Elements    ${elemento}
    Take Screenshot       fullPage=${True}

Validar que campos obrigatórios não permitem envio vazio
    Click          id=confirm-button
   Wait For Elements State    xpath=//span[contains(@class, 'name-error')]    visible
    ${erro_nome}    Get Text    xpath=//span[contains(@class, 'name-error')]
    Should Be Equal    ${erro_nome}    Can't be blank
    
    Wait For Elements State    xpath=//span[contains(@class, 'month-error')]    visible
    ${erro_mes}    Get Text    xpath=//span[contains(@class, 'month-error')]
    Should Be Equal    ${erro_mes}    Can't be blank

    Wait For Elements State    xpath=//span[contains(@class, 'cvc-error')]    visible
    ${erro_cvc}    Get Text    xpath=//span[contains(@class, 'cvc-error')]
    Should Be Equal    ${erro_cvc}    Can't be blank
   
