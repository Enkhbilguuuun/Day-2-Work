import Testimonials from './components/Testimonials';
import "./App.css"

const App = () => {

  
  return (
    <div style={{padding: 10}}>

      <Testimonials 
      image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800" 
      name="Thomas"
      lastName="Shelby" 
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      star={[0,1,2,3,4]}
      />

      <Testimonials 
      image="http://pm1.narvii.com/7797/a1654cfb8bb7e9af28415d5302131cf0b50c0304r1-592-592v2_uhq.jpg" 
      name="Urabe"
      lastName="Mikoto" 
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      star={[0,1,2,3,4]}
      />

      <Testimonials 
      image="https://i.pinimg.com/736x/d2/39/f3/d239f304b6a5f287d9cd5c7a2fd6a0b9.jpg"
      name="Giorno"
      lastName="Giovanna" 
      content="Giorno GIOVANNA
      en All that will survive is the reality of this world. Righteous actions born from reality will never be annihilated. Bucciarati is dead, and so are Abbacchio and Narancia. But their actions and their wills have not been annihilated. They are the ones who gave me this Arrow."
      star={[0,1,2,3,4]}
      />
    </div>
  )
}

export default App























