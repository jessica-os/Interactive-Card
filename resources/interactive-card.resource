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
Validar Campo Nome - Apenas Letras e Espaços
    [Documentation]    Verifica se o campo de nome aceita apenas letras e espaços.
    ${nome_valido}    FakerLibrary.Name
    Type Text    id=name    ${nome_valido}
    ${valor_nome}    Get Property    id=name    value
    Should Match Regexp    ${valor_nome}    ^[A-Za-z\\s]+$

Validar Campo Número do Cartão - Exatamente 16 Dígitos
    [Documentation]    Verifica se o campo número do cartão tem exatamente 16 dígitos.
    Type Text    id=name    Maria Silva
    Type Text    id=number    1234567890123456
    ${valor_numero}    Get Property    id=number    value
    Should Match Regexp    ${valor_numero}    ^\\d{16}$
    Type Text    id=month    09
    Type Text    id=year     25
    Type Text    id=cvc      123
    Click    id=confirm-button
    Wait For Elements State    xpath=//h3[contains(text(), "THANK YOU!")]    visible

Validar Campo Data de Validade - Mês e Ano Válidos
    [Documentation]    Verifica se o mês de validade está entre 01 e 12 e se o ano é válido (futuro).
    Type Text    id=name    Maria Silva
    Type Text    id=number    1234567890123456
    Type Text    id=month    09
    Type Text    id=year     25
    ${valor_mes}    Get Property    id=month    value
    ${valor_ano}    Get Property    id=year     value
    Should Match Regexp    ${valor_mes}    ^(0[1-9]|1[0-2])$
    Should Match Regexp    ${valor_ano}    ^\\d{2}$

Validar Campo CVC - Exatamente 3 Dígitos
    [Documentation]    Verifica se o campo CVC aceita exatamente 3 dígitos numéricos.
    Type Text    id=name    Maria Silva
    Type Text    id=number    1234567890123456
    Type Text    id=month    09
    Type Text    id=year     25
    Type Text    id=cvc      123
    ${valor_cvc}    Get Property    id=cvc    value
    Should Match Regexp    ${valor_cvc}     ^\\d{3}$