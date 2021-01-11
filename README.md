# botjulia
### Autor:

###### Antônio Ricardo Coelho Alcântara Junior

### Tema:

###### "Enfrentando a COVID-19 com o uso de Business Analytics"

### Introdução:

###### As superlotações dos hospitais é um dos principais problemas causados pela COVID-19\. O elevado número de pessoas que precisam de internação com o novo coronavírus em UTIs é um dos fatores cruciais que os governos levam em consideração quando há uma proposta de relaxamento do isolamento social.

### Objetivo:

###### Diante dessa perspectiva, nasceu a ideia de criar a Júlia. Essa assistente virtual tem como objetivo diminuir as superlotações das unidades de saúde do estado do Ceará, melhorando a distribuição de ocupação de hospitais do Ceará. O cidadão, muitas vezes, não sabe qual é o melhor hospital para se consultar, assim, pode piorar mais ainda a situação de um hospital ou, até mesmo, não ser atendido. O indivíduo poderá interagir com a Júlia por meio do aplicativo Telegram, inicialmente. O usuário informará seu endereço e a Júlia retornará os endereços das melhores unidades de saúde para aquele indivíduo, em um raio de 10 km. Destarte, nós conseguiremos diminuir a superlotação dos hospitais, melhorar a qualidade do atendimento e de vida dos cidadãos.

### Metodologia:

###### O Bot Júlia foi todo desenvolvido em linguagem Python, exceto a parte de WebCrawler, que foi desenvolvida em NodeJs. Usamos várias técnicas para conseguir desenvolver essa assistente virtual, como: WebCrawler, Geolocalização, Engenharia de Features etc. Primeiro, nós recebemos o endereço do usuário, para sabermos as coordenadas geográficas. Segundo, fazemos uma consulta de todas os hospitais e as informações listadas na plataforma do IntegraSus e guardamos. Assim, podemos pegar as coordenadas geográficas e os endereços de todos as unidades de saúde disponível. Por fim, retornaremos para os usuários os endereços das melhores unidades de sáude, mais perto e mais vagas.
