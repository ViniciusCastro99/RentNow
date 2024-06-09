function details (nomeCarro){

    let details = '<div class="details">'
    details += '<button class="detail-btn" onclick="  hideDetails()">x</button>'
     //cria a janela de apresentação de detalhes dos carros escolhendo entre as 6 opções de carros disponiveis:
    switch (nomeCarro){   
        case 'kwid':
            details += '<p><span class="bold">Descrição:</span> O Renault Kwid é um modelo compacto de entrada produzido pela fabricante francesa Renault. Tecnicamente, o modelo de entrada do carro Kwid possui várias características que o tornam adequado para uso urbano e viagens curtas. </p>'
            details += '<p> <span class="bold"> Dimensões Compactas: </span> O Kwid é conhecido por suas dimensões compactas, o que o torna ideal para manobras em ambientes urbanos congestionados e estacionamento em espaços apertados.</p>'
            details += '<p><span class="bold">Motorização:</span> Motor 1.0, o Kwid oferece uma combinação de economia de combustível e desempenho adequado para deslocamentos urbanos.</p>'
            details += '<p> <span class="bold">Conforto e Tecnologia:</span> Apesar de ser um modelo de entrada, o Kwid muitas vezes oferece recursos de conforto e tecnologia, como sistema de infoentretenimento, conectividade Bluetooth, entrada USB e até mesmo controle de climatização. </p>'      
        break;
        case 'mobi':
            details += '<p><span class="bold">Descrição:</span> O Fiat Mobi é um modelo compacto de entrada produzido pela fabricante italiana Fiat. Tecnicamente, o modelo de entrada do carro Mobi possui várias características que o tornam adequado para uso urbano e viagens curtas.</p>'
            details += '<p><span class="bold">Dimensões Compactas:</span> O Mobi é conhecido por suas dimensões compactas, o que o torna ideal para manobras em ambientes urbanos congestionados e estacionamento em espaços apertados.</p>'
            details += '<p><span class="bold">Motorização:</span> Motor de 3 cilindros de baixa cilindrada, como um motor 1.0 litro, o Mobi oferece uma combinação de economia de combustível e desempenho adequado para deslocamentos urbanos.</p>'
            details += '<p><span class="bold">Conforto e Tecnologia:</span> O mobi oferece recursos de conforto e tecnologia, como sistema de infoentretenimento, conectividade Bluetooth, entrada USB e até mesmo controle de climatização.</p>' 
        break;
        case 'march':
            details += '<p><span class="bold">Descrição:</span> O Nissan March é um modelo compacto produzido pela fabricante japonesa Nissan. Tecnicamente, o modelo March possui várias características que o tornam adequado para uso urbano e viagens curtas. Aqui está uma breve descrição técnica:</p>'
            details += '<p> <span class="bold">Dimensões Compactas:</span> O March é conhecido por suas dimensões compactas, o que o torna ágil e fácil de manobrar em ambientes urbanos congestionados, além de facilitar o estacionamento em espaços apertados. </p>'
            details += '<p><span class="bold">Motorização:</span> Normalmente equipado com motores de baixa cilindrada, como um motor 1.0 ou 1.6 litros, o March oferece uma combinação equilibrada entre economia de combustível e desempenho adequado para deslocamentos urbanos.</p>'
            details += '<p><span class="bold">Conforto e Tecnologia:</span> O March muitas vezes oferece recursos de conforto e tecnologia, como sistema de áudio, conectividade Bluetooth, entrada USB e até mesmo controle de climatização, proporcionando uma experiência agradável ao dirigir.</p>'
        break;
        case 'gol':
            details += '<p><span class="bold">Descrição:</span> O Volkswagen Gol é um modelo hatch produzido pela fabricante alemã Volkswagen. Conhecido por sua longa história e popularidade no mercado brasileiro, o Gol oferece uma combinação de confiabilidade, conforto e desempenho. Aqui está uma breve descrição técnica:</p>'
            details += '<p><span class="bold">Design Moderno:</span> O Gol apresenta um design contemporâneo e aerodinâmico, com linhas elegantes que proporcionam uma aparência robusta e sofisticada.</p>'
            details += '<p><span class="bold">Motorização Variada:</span> Disponível com uma variedade de opções de motorização, incluindo motores 1.0, 1.6 e até mesmo versões mais potentes, como o motor 1.6 MSI, o Gol oferece uma gama de escolhas para atender às necessidades dos diferentes tipos de motoristas.</p>'
            details += '<p><span class="bold">Tecnologia e Conectividade:</span> Equipado com recursos modernos de tecnologia, o Gol pode oferecer sistemas de infotainment avançados, como tela sensível ao toque, compatibilidade com smartphones, navegação GPS e até mesmo opções de conectividade Wi-Fi.</p>'
            details += '<p><span class="bold">Conforto e Espaço Interno:</span> Apesar de ser um hatch compacto, o Gol oferece um interior espaçoso e confortável, com amplo espaço para os ocupantes e bagagens, tornando-o ideal para viagens longas ou uso diário na cidade.</p>'
        break;
        case 'hb20':
            details +='<p><span class="bold">Descrição:</span> O Hyundai HB20 é um hatch compacto produzido pela fabricante sul-coreana Hyundai. Reconhecido por seu design moderno, tecnologia avançada e desempenho eficiente, o HB20 oferece uma experiência de condução única. Aqui está uma breve descrição técnica: </p>'
            details +='<p> <span class="bold">Design Distinto:</span> O HB20 apresenta um design arrojado e elegante, com linhas aerodinâmicas e detalhes contemporâneos que o destacam na categoria dos hatchs compactos. </p>'
            details +='<p> <span class="bold">Motorização Eficiente:</span> Equipado com uma variedade de opções de motorização, incluindo motores 1.0, 1.6 e até mesmo versões turbo, o HB20 oferece uma combinação de desempenho ágil e economia de combustível. </p>'
            details +='<p><span class="bold">Tecnologia Avançada:</span> O HB20 pode vir equipado com uma série de recursos de tecnologia de ponta, como sistema de infotainment com tela sensível ao toque, conectividade Bluetooth, câmera de ré, sensor de estacionamento e até mesmo sistemas de assistência ao motorista, como controle de cruzeiro adaptativo e frenagem autônoma de emergência.</p>'
            details +='<p> <span class="bold">Conforto e Qualidade Interna:</span> Com um interior bem projetado e materiais de alta qualidade, o HB20 oferece um ambiente confortável e refinado para motoristas e passageiros, com amplo espaço para cabeça e pernas e uma variedade de recursos de conveniência, como ar-condicionado digital, volante multifuncional e bancos ajustáveis. </p>'
            details +='</div>'
        break;
        case 'onix':
            details += '<p><span class="bold">Descrição:</span> O Chevrolet Onix é um hatch compacto produzido pela fabricante americana Chevrolet. Reconhecido por sua versatilidade, economia de combustível e tecnologia embarcada, o Onix oferece uma experiência de condução agradável e moderna. Aqui está uma breve descrição técnica: </p>'
            details += '<p> <span class="bold">Design Dinâmico:</span> O Onix apresenta um design aerodinâmico e moderno, com linhas fluídas e detalhes esportivos que conferem um visual dinâmico e atraente. </p>'
            details +='<p> <span class="bold">Motorização Eficiente:</span> Equipado com motores de alta eficiência, como o motor 1.0 e o motor 1.0 turbo, o Onix oferece uma combinação ideal de desempenho ágil e economia de combustível, tornando-o adequado para uso urbano e viagens mais longas. </p>'
            details += '<p> <span class="bold">Tecnologia Avançada:</span> O Onix conta com uma série de recursos de tecnologia avançada, incluindo sistema de infotainment com tela sensível ao toque, integração com smartphones via Android Auto e Apple CarPlay, câmera de ré, sensor de estacionamento, sistema de áudio premium e até mesmo assistentes de condução, como alerta de colisão frontal e frenagem autônoma de emergência. </p>'
            details += '<p> <span class="bold">Conforto e Espaço Interno:</span> Com um interior bem projetado e espaçoso, o Onix oferece conforto para motorista e passageiros, com amplo espaço para cabeça e pernas, além de uma variedade de recursos de conveniência, como ar-condicionado digital, volante multifuncional e bancos ajustáveis. </p>'
        break;
        }    
        details += '</div>' 
        document.getElementById('detailsContainerId').innerHTML= details
        showDetails()      
}

function showDetails() {
    var detailsContainer = document.getElementById('detailsContainerId');
    detailsContainer.style.display = 'block'; /*Ativa a exibição da div details-container*/
}

function  hideDetails(){
    var detailsContainer = document.getElementById('detailsContainerId');
    detailsContainer.style.display = 'none'; /*Desativa a exibição da div details-container para o botão de fechar a janela*/
}