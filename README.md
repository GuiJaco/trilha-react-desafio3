# Projeto-Dio-React-desafio3

Foi criado uma tela de login com Typescript e implementado uma etapa de autenticação e validação dentro do React.

O desafio final foi deixar o botão de entrar 'disabled' enquanto os campos obrigatórios não estivessem válidos.

Minha solução foi simples, utilizei a propriedade "isValid" que a biblioteca do hook-forms disponibiliza, onde essa função verifica se o valor digitado está válido ou não, e então passei como parametro para a propiedade "disabled" do Button.