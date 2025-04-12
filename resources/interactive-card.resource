*** Settings ***
Library    Browser

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
    Type Text    id=name      Maria Silva
    Type Text    id=number    1234567890123456
    Type Text    id=month     09
    Type Text    id=year      32
    Type Text    id=cvc       123

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
