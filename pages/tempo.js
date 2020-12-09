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