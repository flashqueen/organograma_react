
import ApexTree from 'apextree';
import './Sre.css';

const SRE = () => {

    const data = {
        id: 'secretario',
        data: {
            imageURL: 'fabio.jpeg',
            name: 'Fábio Pereira Va',
            email: 'fabio@seduc.to.gov.br',
            setor: 'Secretário da Educação',
            descricao: 'Responsável pela gestão da educação no estado.',
        },
        options: {
            nodeBGColor: '#fff',
            nodeBGColorHover: '#fff',
        },
        children: [
            {
                id: 'sub-secretario',
                data: {
                    imageURL: 'edinho.jpeg',
                    name: 'Eder Fernandes',
                    email: 'eder@seduc.to.gov.br',
                    setor: 'Secretário Executivo',
                    descricao: 'Coordena as atividades do secretariado.',
                },
                options: {
                    nodeBGColor: '#fff',
                    nodeBGColorHover: '#fff',
                },
                children: [
                    {
                        id: 'sres',
                        data: {
                            imageURL: 'https://i.pravatar.cc/300?img=65',
                            name: 'SREs',
                            email: 'exemplo@seduc.to.gov.br',
                            setor: 'Superintendências',
                            descricao: 'Superintendente responsável por supervisão escolar.',
                        },
                        options: {
                            nodeBGColor: '#fff',
                            nodeBGColorHover: '#fff',
                        },
                    },
                    {
                        id: 'assessor-gabinete-1',
                        data: {
                            imageURL: 'markes.jpeg',
                            name: 'Markes Cristiana Oliveira Dos Santos',
                            email: 'exemplo@seduc.to.gov.br',
                            setor: 'Assessor de Gabinete I',
                            descricao: 'Superintendente de gestão administrativa.',
                        },
                        options: {
                            nodeBGColor: '#fff',
                            nodeBGColorHover: '#fff',
                        },
                        children: [
                            {
                                id: 'chefia-apoio-gabinete',
                                data: {
                                    imageURL: 'https://i.pravatar.cc/300?img=65',
                                    name: 'Chefia de Apoio ao Gabinete I',
                                    email: 'exemplo@seduc.to.gov.br',
                                    setor: 'Chefia de Apoio ao Gabinete I',
                                    descricao: 'Superintendente responsável por supervisão escolar.',
                                },
                                options: {
                                    nodeBGColor: '#fff',
                                    nodeBGColorHover: '#fff',
                                },
                            },
                            {
                                id: 'assessor-gabinete-2',
                                data: {
                                    imageURL: 'markes.jpeg',
                                    name: 'Rosirene Jorge Da Silva E Souza',
                                    email: 'exemplo@seduc.to.gov.br',
                                    setor: 'Assessor de Gabinete II',
                                    descricao: 'Superintendente de gestão administrativa.',
                                },
                                options: {
                                    nodeBGColor: '#fff',
                                    nodeBGColorHover: '#fff',
                                },
                                children: [
                                    {
                                        id: 'assessor-gabinete-3',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=65',
                                            name: 'José Orlando Sales',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Assessor de Gabinete III',
                                            descricao: 'Superintendente responsável por supervisão escolar.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                        children: [
                                            {
                                                id: 'secretaria-geral',
                                                data: {
                                                    imageURL: 'https://i.pravatar.cc/300?img=65',
                                                    name: 'Veronica Lima Caldeira Rezende',
                                                    email: 'exemplo@seduc.to.gov.br',
                                                    setor: 'Secretaria Geral',
                                                    descricao: 'Superintendente responsável por supervisão escolar.',
                                                },
                                                options: {
                                                    nodeBGColor: '#fff',
                                                    nodeBGColorHover: '#fff',
                                                },
                                            },
                                            {
                                                id: 'ouvidoria-geral',
                                                data: {
                                                    imageURL: 'https://i.pravatar.cc/300?img=65',
                                                    name: 'Jandira Rodrigues Aquino Lima',
                                                    email: 'exemplo@seduc.to.gov.br',
                                                    setor: 'Ouvidoria Geral',
                                                    descricao: 'Superintendente responsável por supervisão escolar.',
                                                },
                                                options: {
                                                    nodeBGColor: '#fff',
                                                    nodeBGColorHover: '#fff',
                                                },
                                            }
                                        ],
                                    }
                                ],
                            },
                            {
                                id: 'diretoria-planejamento-estudos-projetos',
                                data: {
                                    imageURL: 'https://i.pravatar.cc/300?img=60',
                                    name: 'Maria Andréa Carvalho De Araújo Aguiar',
                                    email: 'exemplo@seduc.to.gov.br',
                                    setor: 'Diretoria de Planejamento, Estudos e Projetos',
                                    descricao: 'Assessor responsável por assuntos administrativos.',
                                },
                                options: {
                                    nodeBGColor: '#fff',
                                    nodeBGColorHover: '#fff',
                                },
                                children: [
                                    {
                                        id: 'gerencia-acompanhamento-profe',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Schierley Régia Costa Colino De Sousa',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Execução e Acompanhamento do PROFE, PPA, PAR e PEE',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    },
                                    {
                                        id: 'gerencia-elaboracao-estudos-projetos',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Lucas Gomes Lima',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Elaboração de Estudos, Projetos e Termos de Referência',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    }
                                ]
                            },
                            {
                                id: 'diretoria-orcamento-controle-gestao',
                                data: {
                                    imageURL: 'https://i.pravatar.cc/300?img=60',
                                    name: 'Cristiane Angélica De Oliveira Antunes',
                                    email: 'exemplo@seduc.to.gov.br',
                                    setor: 'Diretoria de Orçamento e Controle de Gestão',
                                    descricao: 'Assessor responsável por assuntos administrativos.',
                                },
                                options: {
                                    nodeBGColor: '#fff',
                                    nodeBGColorHover: '#fff',
                                },
                                children: [
                                    {
                                        id: 'gerencia-orcamento',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Paulo Cézar Resplandes Noleto',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Orçamento',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    },
                                    {
                                        id: 'gerencia-acompanhamento-processual',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Tiago Resplandes Labre',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Acompanhamento Processual',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    }
                                ]
                            },
                            {
                                id: 'diretoria-comunicacao',
                                data: {
                                    imageURL: 'https://i.pravatar.cc/300?img=60',
                                    name: 'Fábio De Sousa Almeida',
                                    email: 'exemplo@seduc.to.gov.br',
                                    setor: 'Diretoria de Comunicação',
                                    descricao: 'Assessor responsável por assuntos administrativos.',
                                },
                                options: {
                                    nodeBGColor: '#fff',
                                    nodeBGColorHover: '#fff',
                                },
                                children: [
                                    {
                                        id: 'gerencia-jornalismo',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Marcos Vinicius Da Silva Miranda',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Jornalismo',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    },
                                    {
                                        id: 'gerencia-publicidade-midias-sociais',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Thomas Barbosa Dias',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Publicidade e Mídia Sociais',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    },
                                    {
                                        id: 'gerencia-cerimonial',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Magda Cristina De Souza Silva',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Cerimonial',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    },
                                    {
                                        id: 'gerencia-producao-audiovisual',
                                        data: {
                                            imageURL: 'https://i.pravatar.cc/300?img=60',
                                            name: 'Mauro Henrique Souza e Silva',
                                            email: 'exemplo@seduc.to.gov.br',
                                            setor: 'Gerência de Produção Audiovisual',
                                            descricao: 'Assessor responsável por assuntos administrativos.',
                                        },
                                        options: {
                                            nodeBGColor: '#fff',
                                            nodeBGColorHover: '#fff',
                                        },
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        id: 'conselhos',
                        data: {
                            imageURL: 'https://i.pravatar.cc/300?img=60',
                            name: 'Conselhos',
                            email: 'exemplo@seduc.to.gov.br',
                            setor: 'Conselhos',
                            descricao: 'Assessor responsável por assuntos administrativos.',
                        },
                        options: {
                            nodeBGColor: '#fff',
                            nodeBGColorHover: '#fff',
                        },
                    },
                ],
            },
        ],
    };


    const options = {
        contentKey: 'data',
        width: 1912,
        height: 910,
        nodeWidth: 270,
        nodeHeight: 100,
        fontColor: '#fff',
        childrenSpacing: 50,
        siblingSpacing: 20,
        direction: 'top',
        enableExpandCollapse: true,
        nodeTemplate: (content) =>
        `<div class="node-card" 
            onmouseover="window.dispatchEvent(new CustomEvent('showDescription', { 
                detail: { 
                    descricao: '${content.descricao}', 
                    x: event.pageX, 
                    y: event.pageY 
                } 
            }))" 
            onmouseout="window.dispatchEvent(new CustomEvent('hideDescription'))">
            <img class="node-image" src='/img/${content.imageURL}' alt='' />
            <div class="node-text">
                <div class="node-setor">${content.setor || ''}</div>
                <div class="node-nome">${content.name}</div>
                <div class="node-email">${content.email}</div>
            </div>
        </div>`,
    
        canvasStyle: 'border: none; background: #fff;',
        enableToolbar: true,
    };

    function showDescriptionHandler(event) {
        const { descricao, x, y } = event.detail;
        let descriptionBox = document.getElementById('description-box');
        
        if (!descriptionBox) {
            descriptionBox = document.createElement('div');
            descriptionBox.id = 'description-box';
            descriptionBox.className = 'description-box';
            document.body.appendChild(descriptionBox);
        }
    
        descriptionBox.innerText = descricao;
    
        descriptionBox.style.left = `${x + 10}px`;
        descriptionBox.style.top = `${y + 10}px`;
        descriptionBox.style.display = 'block';
    }
    

    function hideDescriptionHandler() {
        const descriptionBox = document.getElementById('description-box');
        if (descriptionBox) {
            descriptionBox.style.display = 'none';
        }
    }

    window.addEventListener('showDescription', showDescriptionHandler);
    window.addEventListener('hideDescription', hideDescriptionHandler);


    const style = document.createElement('style');

    document.head.appendChild(style);


    const tree = new ApexTree(document.getElementById('svg-tree'), options);
    tree.render(data);
    
}

export default SRE;