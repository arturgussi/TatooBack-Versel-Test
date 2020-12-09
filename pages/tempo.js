function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <>
    <div> Valor Dinâmico => {dynamicDateString}</div>
    <div> O código que renderiza a data foi rodado tbm no frontend </div>
    <div> -------------------------------------------------------------------------------- </div>
    <div> Valor Estático => {props.staticDateString} </div>
    <div> A função getStaticProps() não vai pro frontend, podendo conter dados críticos </div>
    <div> Valores são atualizados em cada refresh </div>
    <div> A propriedade "Revalidate" é a quantidade mínima, segundos, para revalidar os dados no backend </div>
    <div> A Vercel usa o revalidate para fazer novas requisições ao back, e enquanto isso é entregue a última página estática gerada para todas as requisições </div>
    </>
  )
}

export async function getStaticProps() {
  console.log('> Passando pelo getStaticProps();')

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  }

}

export default Tempo