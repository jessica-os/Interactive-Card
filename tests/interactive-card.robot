*** Settings ***
Library    Browser
Resource   ../resources/interactive-card.resource

*** Test Cases ***
Validar envio do formulário com dados válidos
    Abrir a página do formulário
    Preencher o formulário 
    Confirmar envio
    Validar mensagem de sucesso
