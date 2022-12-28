import Footer from "../components/Footer/Footer";
import HeaderClient from "../components/HeaderClient/HeaderClient";
import { Card } from "primereact/card";
import "../styles/home.css";

function Home() {
  return (
    <>
      <header>
        <HeaderClient />
      </header>
      <main>
        <section id="sobre" className="my-8">
          <div className="my-8 titleText text-500">
            <h1 className="text-5xl font-bold text-center my-4">
              Seus pensamentos em segredo
            </h1>
            <h2 className="text-3xl text-center">
              Escreva o que vier em sua mente e guarde seu dia
            </h2>
          </div>
          <div className="flex justify-content-around card-container gap-4 mx-8">
            <Card
              header={<img alt="Card" src="/src/assets/image/caneta.jpg" />}
              title="Confiança"
              style={{ width: "25rem" }}
            >
              <p className="mt-4 text-xl">
                Escreva sua histórias e guarde elas com segurança e confiaça em
                nossa plataforma totalmente online
              </p>
            </Card>
            <Card
              header={<img alt="Card" src="/src/assets/image/book.jpg" />}
              title="Futuro"
              style={{ width: "25rem" }}
            >
              <p className="mt-4 text-xl">
                Lembre-se delas quando necessários o passado é importante para
                entender o nosso futuro.
              </p>
            </Card>
            <Card
              header={<img alt="Card" src="/src/assets/image/coffee.jpg" />}
              title="Vida"
              style={{ width: "25rem" }}
            >
              <p className="mt-4 text-xl">
                Faça disso sua rotina e você terá uma vida muito melhor com o
                seu futuro.
              </p>
            </Card>
          </div>
        </section>
        <section id="recursos" className="surface-300 w-full h-15rem">
          <h1 className="text-center text-3xl pt-4 pb-6">Recursos</h1>
          <p className="text-center text-xl w-10 m-auto">
            Software totalmente online salvando seus pensamentos e dias na
            nuvem, utilizando do que existe de mais moderno no mercado, com
            segurança e criptografia em seus texto, editor de texto fácil de
            manusear.
          </p>
        </section>
        <section id="beneficios" className="w-full my-8">
          <h1 className="text-center text-3xl pt-4 pb-6">Beneficios</h1>
          <h2 className="text-center text-2xl pb-4">Melhora o estado mental</h2>
          <p className="text-center text-base w-10 m-auto">
            Um estudo publicado pela revista Advances in Psychiatric Treatment
            (Avanços no Tratamento Psiquiátrico) revelou uma ampla pesquisa
            sobre o tema realizada pela Universidade de Iowa. De acordo com o
            artigo, os pesquisadores constataram que os indivíduos analisados
            que escreveram sobre seus eventos traumáticos, situações de estresse
            ou qualquer situação que tenha provocado emoções fortes durante 15 a
            20 minutos, de três a cinco vezes por semana, conseguiram superar
            com maior facilidade esses acontecimentos do que aqueles que não
            escreveram.
          </p>
          <h2 className="text-center text-2xl pb-4 pt-6">
            Desperta a criatividade
          </h2>
          <p className="text-center text-base w-10 m-auto">
            Escrever sobre as próprias experiências não apenas ajuda a pessoa a
            processá-las melhor, mas ainda auxilia na lapidação do próprio
            texto. Afinal, escrever com frequência é a maneira mais eficiente de
            aumentar a qualidade do conteúdo escrito. Quando você escreve com
            regularidade, aprende a elaborar melhor as frases, a desenvolver
            ideias complexas, a memorizar melhor as informações importantes e,
            claro, ajuda também a despertar a sua própria criatividade.
          </p>
          <h2 className="text-center text-2xl pb-4 pt-6">
            Lembrete do passado
          </h2>
          <p className="text-center text-base w-10 m-auto">
            Ao relatar sua vida nas páginas de um diário você estará garantindo
            uma lembrança dos erros que cometeu e das realizações das quais se
            orgulha – aqueles momentos que merecem ser recordados no futuro.
            Isso pode ser bastante útil em fases da vida quando se sentir
            perdido, sem direção e precisar fazer uma reavaliação. As conquistas
            poderão aumentar sua autoestima mostrando o que já foi obtido ao
            longo de sua vida. No campo profissional, as anotações podem servir
            de base para relatórios, pedidos de aumento salarial, promoções ou
            mesmo correção rumo!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
