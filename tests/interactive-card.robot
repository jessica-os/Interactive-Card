*** Settings ***
Library    Browser
Resource   ../resources/interactive-card.resource
Test Setup     Abrir a página do formulário
Test Teardown  Close Browser

*** Test Cases ***
Validar envio do formulário com dados válidos
   
    Preencher o formulário 
    Confirmar envio
    Validar mensagem de sucesso
    

Validar o não envio do formulário com campos em branco
    
    Validar que campos obrigatórios não permitem envio vazio
    
Validar campo nome
    
    Validar Campo Nome - Apenas Letras e Espaços
Validar Campo Número do Cartão 
  
    Validar Campo Número do Cartão - Exatamente 16 Dígitos
Validar Campo Data de Validade
    
    Validar Campo Data de Validade - Mês e Ano Válidos
Validar Campo CVC
   
    Validar Campo CVC - Exatamente 3 Dígitos
   

    
