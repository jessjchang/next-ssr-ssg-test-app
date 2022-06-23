import colors from '../data/colors.json'

export default function Color({ color }) {
  return <div className='color-page' style={{ backgroundColor: color.hex }}>
    <h1>{color.name}</h1>
  </div>
}

export async function getStaticPaths() {
  const paths = colors.map(color => ({
    params: { color: color.name }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const color = colors.find(color => color.name === params.color)
  return { props: { color } }
}



// import colors from '../data/colors.json'
// import ErrorPage from 'next/error'

// export default function Color({ color }) {
//   if (!color) {
//     return <ErrorPage statusCode={404} />
//   }

//   return <div className='color-page' style={{ backgroundColor: color.hex }}>
//     <h1>{color.name}</h1>
//   </div>
// }

// export async function getServerSideProps({ params }) {
//   try {
//     const res = await fetch(`http://localhost:3000/api/${params.color}`)
//     const color = await res.json()
//     return { props: { color } }
//   } catch {
//     res.statusCode = 404
//     return { props: {} }
//   }
// }
