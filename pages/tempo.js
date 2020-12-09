function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <>
    <div> Valor Dinâmico => {dynamicDateString}</div>
    <div> O código que renderiza a data foi rodado tbm no frontend </div>
    <div> -------------------------------------------------------------------------------- </div>
    <div> Valor Estático => {props.staticDateString} - com delay de 5 segundos</div>
    <div> A função getStaticProps() não vai pro frontend, podendo conter dados críticos </div>
    <div> Valores são atualizados em cada refresh </div>
    </>
  )
}

export async function getStaticProps() {
  console.log('> Passando pelo getStaticProps();')
  console.log('> Adicionando Delay de 5 segundos;')

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }

}

export default Tempo