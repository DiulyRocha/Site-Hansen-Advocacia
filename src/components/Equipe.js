import React from 'react';

const Equipe = () => {
  return (
    <section style={{ padding: '40px', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ textAlign: 'center' }}>Nossa Equipe</h2>
      <div style={{ display: 'flex', gap: '20px', maxWidth: '1200px', margin: 'auto', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '350px' }}>
          <img 
            src="/felipe.JPG" 
            alt="Dr. Luiz Felipe Hansen" 
            style={{ width: '200px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} 
          />
          <h3>Dr. Luiz Felipe Hansen</h3>
          <p style={{ textAlign: 'justify' }}>
            Atua com dedicação e excelência na área jurídica desde 2008. Formado em Direito pela Universidade Luterana do Brasil – ULBRA, campus Torres, é pós-graduado em Direito de Família, área na qual construiu uma carreira sólida, marcada por experiência prática, sensibilidade e profundo conhecimento técnico.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Ao longo de sua trajetória, desenvolveu uma atuação reconhecida pela responsabilidade, ética e comprometimento com os interesses de seus clientes. Sempre atento às constantes mudanças no cenário jurídico, busca atualização contínua e aprimoramento profissional, o que reflete diretamente na qualidade e segurança dos serviços prestados.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Embora tenha no Direito de Família uma de suas especialidades, Luiz Felipe Hansen atua em diversas áreas do Direito, como Direito Civil, Contratual e Empresarial, entre outras, oferecendo uma abordagem multidisciplinar, estratégica e personalizada, conforme as particularidades de cada caso.
          </p>
          <p style={{ textAlign: 'justify' }}>
            É fundador e proprietário do escritório Hansen Advocacia, referência regional pela seriedade, competência e excelência no atendimento. À frente de uma equipe capacitada e comprometida, Dr. Luiz Felipe mantém como pilares do escritório o atendimento humanizado, a escuta ativa e a busca por soluções jurídicas eficazes, justas e seguras.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Seu trabalho é pautado na construção de relações de confiança com os clientes, promovendo um ambiente de acolhimento, transparência e respeito. A Hansen Advocacia se consolida, assim, como um espaço onde o conhecimento jurídico caminha lado a lado com a empatia, a ética e o compromisso com a justiça.
          </p>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '350px' }}>
          <img 
            src="/diuly.JPG" 
            alt="Diuly" 
            style={{ width: '200px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} 
          />
          <h3>Diuly Rocha</h3>
          <p style={{ textAlign: 'justify' }}>
            É formada em Administração pela Universidade Luterana do Brasil – ULBRA, campus Torres, e desempenha papel essencial na gestão e no dia a dia do escritório Hansen Advocacia. Acompanha o Dr. Luiz Felipe Hansen desde os seus 17 anos, somando mais de uma década de dedicação e comprometimento à empresa.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Responsável pela administração do escritório, Diuly é reconhecida por sua pontualidade, organização e pela busca constante por aprendizado e aprimoramento profissional. Com conhecimentos múltiplos e visão estratégica, colabora ativamente para que o atendimento prestado seja sempre respeitoso, humanizado e eficiente.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Mais do que uma colaboradora, Diuly é uma peça-chave na estrutura da Hansen Advocacia. Com postura proativa, espírito de equipe e um comprometimento genuíno, ela veste a camisa do escritório todos os dias, contribuindo não apenas para a excelência no atendimento aos clientes, mas também para a organização, crescimento e eficiência das atividades jurídicas e administrativas. Sua presença inspira confiança e reforça o propósito do escritório em oferecer um serviço humanizado, ético e de alta qualidade.
          </p>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '350px' }}>
          <img 
            src="/uitani.JPG" 
            alt="Uítani Andrade" 
            style={{ width: '200px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} 
          />
          <h3>Uítani Andrade</h3>
          <p style={{ textAlign: 'justify' }}>
            Uítani Andrade é auxiliar de escritório na Hansen Advocacia e está em fase de conclusão do curso de Direito, atualmente no último semestre. Aprovada nas duas fases do Exame da OAB, aguarda apenas a colação de grau para iniciar oficialmente sua trajetória como advogada.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Sua formação acadêmica é complementada por experiências práticas de grande relevância, como os estágios realizados no gabinete do juiz e na Defensoria Pública, que ampliaram sua visão crítica e consolidaram seu compromisso com a justiça e com a ética profissional.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Com destacada dedicação, inteligência e responsabilidade, Uítani desempenha suas funções com excelência, contribuindo de forma significativa para o bom funcionamento do escritório. Sua postura proativa, atenção aos detalhes e domínio técnico fazem dela uma profissional completa, mesmo antes da formalização de sua carreira jurídica.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Mais do que uma colaboradora, é uma presença essencial no dia a dia da Hansen Advocacia, reconhecida pela seriedade e pelo cuidado com que realiza cada tarefa, sempre com foco em oferecer um atendimento eficiente, humano e de alta qualidade.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Equipe;
