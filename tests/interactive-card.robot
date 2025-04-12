*** Settings ***
Library    Browser
Resource   ../resources/interactive-card.resource

*** Test Cases ***
Validar envio do formulário com dados válidos
    Abrir a página do formulário
    Preencher o formulário 
    Confirmar envio
    Validar mensagem de sucesso
    Close Browser

Validar o não envio do formulário em caso de campos em branco
    Abrir a página do formulário
    Validar que campos obrigatórios não permitem envio vazio
    Close Browser

    
