
import './Font.css';
// import { Container } from "reactstrap";
import Navigation from './Navigation';
import Footer from './Footer';



function Information() {

    return (
     <>
<div>
<Navigation/>

</div>
<header>

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={5} aria-label="Slide 6" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={6} aria-label="Slide 7" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={7} aria-label="Slide 8" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={8} aria-label="Slide 9" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
    <img src="https://cultureandheritage.org/wp-content/uploads/2012/11/1-5.jpg" alt="	Shantiniketan" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Patachitra</h3>
    <p style={{  fontWeight: '600' }}>Patachitra or Pattachitra is a general term for traditional, cloth-based scroll painting, based in the eastern Indian states of Odisha, West Bengal and parts of Bangladesh. Patachitra artform is known for its intricate details as well as mythological narratives and folktales inscribed in it.
       Pattachitra is one of the ancient artworks of Odisha, originally created for ritual use and as souvenirs for pilgrims to Puri, as well as other temples in Odisha</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://c1.staticflickr.com/3/2329/2136222971_0820b0a46a_z.jpg?zz=1" alt="Uttar Dinajpur" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Terracotta</h3>
    <p style={{  fontWeight: '600' }}>The terracotta craft is one such exclusive craft. The word ‘terracotta’ has been derived from Latin phrase “terra cocta”, which means ‘baked earth’. Terracotta craft is more or less the same as its name. It refers to the art of shaping clay into beautiful designs and then baking them at high temperature, to grant them stiffness and stability.
       The finest patterns of terracotta sheets can be found in Murshidabad, Birbhaum, Jessore, Hooghly and Digha towns of West Bengal.
</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://i.pinimg.com/originals/9b/d3/af/9bd3af86fd0a80929ac6c8614962aa78.jpg" alt="South 24 Parganas" className="d-block w-100" style={{ height: '500px' }} />
     <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black', borderRadius:'30px' }}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Kantha-patched cloth embroidery</h3>
    <p style={{  fontWeight: '600' }}> Housewives of rural Bengal have long played a significant role in the evolution of Kantha embroidery craft. It was customary for these women to widely use the techniques of Kaantha’s stitch and embroidery in order to create household quilts or traditional personal fabrics, garments, dhotis and sarees.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://i.pinimg.com/originals/ba/d6/92/bad6920ae8d1cf96ce9ae809a2b99f86.jpg" alt="Purulia" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Chhau mask</h3>
    <p style={{  fontWeight: '600' }}>The Chhau mask is a traditional cultural heritage of Purulia in the Indian state of West Bengal. The Chhau mask of Purulia is registered on the List of Geographical Indications. As the basic difference of Purulia Chhau the mask is unique and traditional. </p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://i.ytimg.com/vi/YewOZNvOCaA/maxresdefault.jpg" alt="Murshidabad" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Sholapith</h3>
    <p style={{  fontWeight: '600' }}>Sholapith or shola pith  is a dried milky-white spongey plant matter from Aeschynomene species. It can be pressed and shaped into objects of art, or for practical use. It is the pith used for pith helmets, so giving them their name. </p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://i.pinimg.com/originals/fa/ae/49/faae490f08cedf453311306a201a5e22.jpg" alt="Kolkata" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Clay model</h3>
    <p style={{  fontWeight: '600' }}>Clay modeling, also known as sculpting or pottery, offers endless opportunities for artistic expression and creativity. Whether you are a professional artist, a hobbyist, or a beginner eager to explore a new medium, this guide will provide you with essential knowledge and insights into the techniques, tools, materials, sculptures, and pottery associated with clay modeling. </p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://rmgbd.net/wp-content/uploads/2020/01/Jute-2.jpg" alt="Kolkata" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Jute</h3>
    <p style={{  fontWeight: '600' }}>Clay modeling, also known as sculpting or pottery, offers endless opportunities for artistic expression and creativity. Whether you are a professional artist, a hobbyist, or a beginner eager to explore a new medium, this guide will provide you with essential knowledge and insights into the techniques, tools, materials, sculptures, and pottery associated with clay modeling. </p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="http://1.bp.blogspot.com/-gNroj2aISbM/U93H-HL9BzI/AAAAAAAAb8k/UWVAFEblfUk/w1200-h630-p-k-no-nu/Dhokra+tribal+metal+Art+craft+West+Bengal+India.jpg" alt="Kolkata" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Dhokra</h3>
    <p style={{  fontWeight: '600' }}>Dhokra  is non–ferrous metal casting using the lost-wax casting technique. This sort of metal casting has been used in India for over 4,000 years and is still used. One of the earliest known lost wax artefacts is the dancing girl of Mohenjo-daro.The product of dhokra artisans are in great demand in domestic and foreign markets because of primitive simplicity, enchanting folk motifs and forceful form. Dhokra horses, elephants, peacocks, owls, religious images, measuring bowls, and lamp caskets etc., are highly appreciated.
       The lost wax technique for casting of copper based alloys has also been found in China, Egypt, Malaysia, Nigeria, Central America, and other places. </p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://en.gaonconnection.com/wp-content/uploads/2020/12/Diverse-Shital-Pati-products-scaled.jpg" alt="Kolkata" className="d-block w-100" style={{ height: '500px' }} />
    <div className="carousel-caption" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(0.05px)',color: 'black',  borderRadius:'30px'}}>
    <h3 style={{  fontWeight: '700', fontSize:'25px' }}>Sitalpati</h3>
    <p style={{  fontWeight: '600' }}>Sitalpati , also called sital pati and sittal pati, is a kind of mat which feels cold by nature. It is made from murta plants (Schumannianthus dichotomus). It is usually used in Bangladesh , especially in Sylhet, where it is said to have originated from. Mats with decorative designs are called nakshi pati. </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" style={{ height: "30px", width: "30px", border: "none" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" style={{ height: "30px", width: "30px", border: "none" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>




     </header>


     {/* <h1 style={{textAlign: 'center'}}>CraftConnect</h1> */}
     <div className="container2" id="about-section">
  <svg className='svg1' viewBox="0 0 960 300">
    <symbol id="s-text">
      <text textAnchor="middle" x="50%" y="80%">CraftConnect</text> 
    </symbol>
    <g className="g-ants">
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
      <use xlinkHref="#s-text" className="text-copy" />
    </g>
  </svg>
  

</div>

<div className="container1">
<p>&quot;CraftConnect&quot; is an innovative web development project aimed at facilitating the development of villages by harnessing the talents of local artisans and craftsmen. This online platform serves as a bridge between rural artisans and a global audience, providing them with a marketplace to showcase and sell their unique handicrafts</p>
</div>

<section id="Shantiniketan" className='village'>
<div>
  <div className="image-left">
    <img src="https://i.ytimg.com/vi/Yv5tx_cDvm0/maxresdefault.jpg" alt="Shantiniketan" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}>Shantiniketan, Birbhum </h1>
      <p><h5 style={{fontSize:'20px'}}> Shantiniketan was established by Maharishi Debendranath Tagore, father of the Nobel laureate
 poet Rabindranath Tagore, in 1863. Initially, it served as an ashram called &quot;Santiniketan&quot;
 (meaning &quot;abode of peace&quot;) where people from different religious backgrounds could come
 together to meditate and worship. Later, Rabindranath Tagore transformed it into an educational
 center.Shantiniketan became a cultural hub attracting scholars, artists, and intellectuals from
 around the world. It played a crucial role in the Bengal Renaissance.</h5></p>
 <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a>
                          
  


    </div>
  </div>
  
  <div className="image-right">
    <img src="https://i0.wp.com/www.itssouthasian.com/wp-content/uploads/2020/06/Manasa_the_Snake_Goddess_6124609239.jpg" alt="Text with image example" />
    <div>
  
      <h2 style={{ textAlign:'center',fontSize:'50px' }}> Kantha embroidery </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}> Kantha embroidery is one of the notable handicrafts of this region. It
 involves intricate stitching patterns often used in creating quilts, sarees, and other garments. </h5></p>
      {/* <footer>(Placeholder text)</footer> */}
      <h2 style={{ textAlign:'center',fontSize:'50px'}}> Patachitra painting </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}> Another specialty is the Patachitra style of painting, which involves intricate
 storytelling through colorful paintings on cloth or paper. </h5></p>
      <h2 style={{ textAlign:'center',fontSize:'50px' }}>  Terracotta </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px'}}> Skilled artisans in the region create beautiful terracotta artworks, including sculptures
 and decorative items.  </h5></p>

    </div>
   
  </div>
  

  </div>
  </section>
  <section id="Bishnupur" className='village' >
<div>
  <div className="image-left">
    <img src="https://mediaindia.eu/wp-content/uploads/2017/06/221014182135-terracotta-horsesLOWRES.jpg" alt="Shantiniketan" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}>Bishnupur, Bankura</h1>
      <p><h5 style={{fontSize:'20px'}}>  Bishnupur was the capital of the Malla dynasty, which ruled over the region from the 7th to the
 19th century. The Mallabhum region, as it was called, was known for its patronage of art and
 culture.
 The most significant aspect of Bishnupur&apos;s history is its terracotta temples, built between the
 17th and 18th centuries. These temples are adorned with intricate terracotta carvings depicting
 various scenes from Hindu epics, mythology, and daily life.</h5></p>
 <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a>
 </div>
  </div>
  <div className="image-right">
    <img src="https://cultureandheritage.org/wp-content/uploads/2013/04/baluchari-2.jpg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center',fontSize:'50px' }}>Terracotta Craft </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}> Bishnupur is famous for its terracotta craft, which is evident not only in the
 temple architecture but also in various handicraft items produced by local artisans. These
 include terracotta pottery, figurines, jewelry, and decorative items. </h5></p>
      <h2 style={{ textAlign:'center',fontSize:'50px' }}>   Baluchari Sarees </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}>  Another notable handicraft of Bishnupur is the Baluchari sarees. These silk
 sarees are woven with intricate motifs depicting mythological stories and historical scenes. 
  </h5></p>

    </div>
   </div>
   </div>
  </section> 
  <section id="Dargeeling" className='village'>
<div>
  <div className="image-left">
    <img src="https://www.craftsglossary.com/wp-content/uploads/2018/06/weaving-1024x574.jpg" alt="Dargeeling" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}>Darjeeling, Darjeeling</h1>
      <p><h5 style={{fontSize:'20px'}}>  Darjeeling&apos;s history is rich with diverse cultural influences. Originally inhabited by indigenous
 tribes like the Lepchas, it came under British rule after the Treaty of Sugauli in 1828.
 Recognizing its potential for tea cultivation, Darjeeling became renowned for its high-quality tea
 by the mid-19th century. It also served as a favored hill station for the British during colonial
 times.
 <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a></h5></p>
      
 </div>
  </div>
  <div className="image-right">
    <img src="https://www.liveenhanced.com/wp-content/uploads/2018/06/wood-carving-designs-11.jpg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center',fontSize:'40px' }}>Handwoven Textiles </h2>
      <p ><h5 style={{ textAlign:'center' ,fontSize:'20px'}}>  Darjeeling is known for its exquisite handwoven textiles, including shawls,
 scarves, and traditional attire. The intricate designs and vibrant colors reflect the region&apos;s
 cultural heritage. </h5></p>
      <h2 style={{ textAlign:'center',fontSize:'40px' }}>   Wood Carving </h2>
      <p ><h5 style={{ textAlign:'center' ,fontSize:'20px'}}>
 Wood Carving: Skilled artisans in Darjeeling practice the art of wood carving, creating intricate
 patterns and designs on various wooden objects such as furniture, decorative items, and
 souvenirs.  </h5></p>
 <h2 style={{ textAlign:'center',fontSize:'40px' }}>  Thangka Paintings </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}>  
      Thangka paintings, traditional Tibetan Buddhist scroll paintings, are also
 produced in Darjeeling. These paintings often depict religious themes and are highly prized for
 their intricate detail and spiritual significance.  </h5></p>
 <h2 style={{ textAlign:'center',fontSize:'40px' }}> Handmade Paper Products </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}>  
      Darjeeling is known for its handmade paper products, including
 notebooks, journals, and stationery. These products are often made from locally sourced
 materials and showcase the region&apos;s commitment to sustainability and traditional craftsmanship  
</h5></p>
    </div>
   </div>
   </div>
  </section> 
  <section id="Kalimpong" className='village'>
<div>
  <div className="image-left">
    <img src="https://www.rugrabbit.com/sites/default/files/imagecache/big/zentner_collection/24-2019/more_images/picture2_0.jpg" alt="Kalimpong" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}>Kalimpong, Darjeeling</h1>
      <p><h5 style={{fontSize:'20px'}}> Kalimpong is a picturesque hill station located in the Indian state of West Bengal, nestled in the foothills of the Himalayas. It is situated at an altitude of 1,250 meters (4,101 feet) above sea level. Originally, Kalimpong was a part of the Kingdom of Sikkim, but it came under the rule of Bhutan in the 18th century. Later, during the British colonial period, it became a part of Darjeeling district in West Bengal. The town has a rich and diverse heritage, influenced by various cultures including Tibetan, Nepali, Bhutanese, and British. It served as an important trading hub along the ancient Silk Route connecting Tibet, Bhutan, and Sikkim. During the colonial era, Kalimpong became a center for British tea planters and missionaries. Many schools and churches were established during this time, contributing to its educational and cultural significance.
      <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a></h5></p>
 </div>
  </div>
  <div className="image-right">
    <img src="https://livingnomads.com/wp-content/uploads/2022/04/08/wooden-mask-bhutan.jpeg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center',fontSize:'50px' }}>Handicrafts </h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}> One of the highlights of Kalimpong is its vibrant handicrafts industry. The town is renowned for its exquisite handicrafts, including Tibetan and Bhutanese artifacts, handwoven textiles, wood carvings, and thangkas (Buddhist scroll paintings). The artisans in Kalimpong have preserved traditional techniques passed down through generations, creating unique and high-quality handicrafts that attract visitors from all over the world. Today, Kalimpong&apos;s handicraft industry remains a significant aspect of its cultural identity, drawing tourists who are interested in exploring and purchasing these traditional crafts.  
     </h5></p>
    </div>
   </div>
   </div>
  </section> 
  <section id="Charida" className='village'>
<div>
  <div className="image-left">
    <img src="https://cdn.pixabay.com/photo/2017/08/15/18/35/chau-mask-2645050_640.jpg" alt="Kalimpong" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}>Charida, Purulia</h1>
      <p><h5 style={{fontSize:'20px'}}>  Charida has a deep-rooted history dating back centuries. It is primarily inhabited by the Santhali
 tribe, who have a unique cultural identity and traditions. The village has witnessed various
 socio-cultural transformations over time.
     <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a></h5></p>
 </div>
  </div>
  <div className="image-right">
    <img src="https://cdn.pixabay.com/photo/2017/08/15/18/46/chau-mask-2645099_960_720.jpg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center',fontSize:'50px' }}>Mask-Making Craft</h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}>  One of the most notable aspects of Charida is its thriving handicrafts industry. The village is
 renowned for its traditional mask-making craft. The artisans of Charida are skilled in crafting
 intricate wooden masks, which are an integral part of local festivals, particularly the Chhau
 dance performances.
 Chhau dance, a traditional folk dance form of the region, often incorporates these masks to
 portray various characters from Hindu mythology and local folklore. The masks are meticulously
 crafted using locally available materials like wood, clay, and natural colors. Each mask is a piece
 of art, reflecting the artisan&apos;s craftsmanship and cultural heritage  </h5></p>
    </div>
   </div>
   </div>
  </section> 
  <section id="Krishnanagar" className='village'>
<div>
  <div className="image-left">
    <img src="https://3.bp.blogspot.com/-35pKV3Ofh3o/XOFHf_a8NvI/AAAAAAAAJ2A/tYzr2nd2-J4xyOQsmGM0sCjPTFi0zPOVACLcBGAs/s1600/krishnanagar%2Bclay%2B1.jpg" alt="Krishnanagar" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}> Krishnanagar Ghurni, Nadia</h1>
      <p><h5 style={{fontSize:'20px'}}>  Krishnanagar Ghurni, located in the Nadia district of West Bengal, India, holds a rich history deeply intertwined with its unique handicrafts tradition. The town is renowned for its skilled artisans who specialize in crafting exquisite clay dolls, often referred to as Krishnanagar clay dolls or Ghurni dolls. The history of Ghurni&apos;s craftsmanship can be traced back to the late 18th century when Krishnanagar emerged as a prominent center for clay modeling and pottery. The tradition was fostered and flourished under the patronage of the local rulers, particularly the royal family of Krishnanagar.
      <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a></h5></p>
 </div>
  </div>
  <div className="image-right">
    <img src="https://c2.staticflickr.com/8/7019/6812849049_6f01191166_b.jpg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center' ,fontSize:'50px'}}>Clay Sculpture</h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}> The artisans of Ghurni are known for their remarkable skill in creating lifelike clay sculptures, depicting various themes ranging from mythology and folklore to contemporary figures. 
      These dolls are meticulously handcrafted using locally sourced clay and natural colors. Each doll is a testament to the craftsmanship and artistic finesse of the artisans, showcasing intricate detailing and vibrant colors.
      </h5></p>
    </div>
   </div>
   </div>
  </section> 
  <section id="Shantipur" className='village'>
<div>
  <div className="image-left">
    <img src="https://i.etsystatic.com/24114656/r/il/4aff55/2772272760/il_1588xN.2772272760_jnxj.jpg" alt="Krishnanagar" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }} > Shantipur, Nadia</h1>
      <p><h5 style={{fontSize:'20px'}}>  Shantipur has a history dating back to ancient times. It was an important center for trade and
 commerce during the medieval period and was known for its cotton and silk textiles. The town
 flourished under various rulers, including the Palas, Senas, and Mughals.
 <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a></h5></p>
 </div>
  </div>
  <div className="image-right">
    <img src="https://scx2.b-cdn.net/gfx/news/hires/2021/cotton.jpg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center' ,fontSize:'50px'}}> Shantipur Textiles</h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}>  The town is famous for its traditional handloom weaving, particularly the production of fine
 cotton and silk sarees. Shantipur sarees are known for their intricate designs, vibrant colors,
 and superior craftsmanship. The weavers use traditional techniques passed down through
 generations to create these exquisite textiles.
 Apart from sarees, Shantipur is also known for its production of dhotis, dupattas, and other
 woven garments. The handloom industry remains a vital part of the town&apos;s economy, providing
 employment to a large number of skilled artisans.
 In addition to textiles, Shantipur is known for its terracotta craftwork. Artisans in the town create
 beautiful terracotta figurines, pottery, and decorative items, showcasing the rich cultural heritage
 of the region</h5></p>
    </div>
   </div>
   </div>
  </section> 
  {/* <section id="Kumartuli">
<div>
  <div className="image-left">
    <img src="https://whc.unesco.org/uploads/thumbs/site_1375_0001-750-750-20230719155401.jpg" alt="Krishnanagar" />
    <div>
      <h1>Kumartuli, Kolkata</h1>
      <p><h5>  Kumartuli, located in the northern part of Kolkata, India, is renowned for its centuries-old
 tradition of clay idol making, especially for religious festivals like Durga Puja. The history of
 Kumartuli dates back to the late 18th century during British colonial rule.
 The name "Kumartuli" translates to "potter's locality" in Bengali. It was initially inhabited by
 potters who settled there due to its proximity to the Hooghly River, which provided them with the
 necessary clay for their craft. Over time, Kumartuli evolved into a hub for artisans specializing in
 sculpting idols primarily for Hindu festivals.
      <a href='#'><button type="button" className="btn btn-warning">Location</button></a></h5></p>
 </div>
  </div>
  <div className="image-right">
    <img src="https://source.unsplash.com/640x460?beautiful" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center' }}>Clay Modles</h2>
      <p ><h5 style={{ textAlign:'center' }}> The artisans of Kumartuli are highly skilled in crafting idols of various deities, but their most
 famous creations are the elaborate clay sculptures of Goddess Durga. These idols are
 meticulously handcrafted using straw, bamboo, clay, and cloth, and are often adorned with
 intricate decorations and vibrant colors.
 One of the specialties of Kumartuli is its unique style and craftsmanship, which has been
 passed down through generations<p> <a href='#'><button type="button" className="btn btn-warning" >Products</button></a></p></h5></p>
    </div>
   </div>
   </div>
  </section>  */}
  <section id="Baharampur" className='village'>
<div>
  <div className="image-left">
    <img src="https://www.utsavpedia.com/wp-content/uploads/2013/07/Picture171.jpg" alt="Krishnanagar" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}>Baharampur, Murshidabad</h1>
      <p><h5 style={{fontSize:'20px'}}>  Originally known as Kasim Bazar, it was renamed Baharampur after Nawab Alivardi Khan&apos;s
 nephew, Bahar Ali Khan, who was the founder of the city.
 Historically, Baharampur was a significant center during the Mughal era, serving as an important
 administrative and commercial hub. It was also a prominent military base during the British
 colonial period.
 <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a></h5></p>
 </div>
  </div>
  <div className="image-right">
    <img src="https://www.boontoon.com/blog/wp-content/uploads/2019/02/Keralas-Beautiful-Eco-friendly-Handicrafts-Coir-and-Cane-Products-1024x768-1024x768.jpg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center',fontSize:'50px' }}>Handicrafts</h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}> In terms of handicrafts specialty, Murshidabad is renowned for its exquisite craftsmanship in silk
 weaving. The city produces some of the finest quality silk sarees, known as Murshidabad silk or
 Baluchari sarees. These sarees are characterized by intricate designs, rich colors, and often
 depict scenes from epics or mythology.
 Additionally, Baharampur and its surrounding areas are known for their traditional craftsmanship
 in metalware, particularly brass and bell metal artifacts. Skilled artisans in the region create
 beautiful utensils, decorative items, and religious idols using these metals, showcasing the rich
 cultural heritage of the area. </h5></p>
    </div>
   </div>
   </div>
  </section> 
  <section id="Khoroi" className='village'>
<div>
  <div className="image-left">
    <img src="https://www.ghawyy.com/wp-content/uploads/2021/08/arttt.jpg" alt="Khoroi" />
    <div>
      <h1 style={{  fontWeight: '700', fontSize:'50px' }}>Khoroi, Midnapore</h1>
      <p><h5 style={{fontSize:'20px'}}>  Khoroi, also known as Kharui, is a traditional handicraft village located in the Midnapore district
 of West Bengal, India. The history of Khoroi dates back centuries, with its roots deeply
 embedded in the rich cultural heritage of Bengal.
 <a href='https://maps.app.goo.gl/pAxNXkqGSYw43WMW8'><button type="button" className="btn btn-warning"><p style={{fontSize:'20px', fontWeight: 'bold'}}>Location</p></button></a></h5></p>
 </div>
  </div>
  <div className="image-right">
    <img src="https://authindia.com/wp-content/uploads/2020/01/HANDMADE1.jpeg" alt="Text with image example" />
    <div><h2 style={{ textAlign:'center',fontSize:'50px' }}>Handicrafts</h2>
      <p ><h5 style={{ textAlign:'center',fontSize:'20px' }}> The village of Khoroi has been renowned for its unique handicrafts, particularly in the field of
 clay pottery and terracotta artistry. Artisans in Khoroi have mastered the art of crafting exquisite
 terracotta items such as decorative pots, figurines, plaques, and various other artistic creations.
 These products often showcase intricate designs, depicting themes from mythology, folklore,
 and everyday life.
 The tradition of terracotta craftsmanship in Khoroi has been passed down through generations,
 with artisans meticulously honing their skills and preserving the cultural legacy of their
 ancestors. The clay used in the production of these handicrafts is sourced locally, contributing to
 the authenticity and sustainability of the craft.</h5></p>
    </div>
   </div>
   </div>
  </section> 
<Footer/>



     </>
    )}
export default Information;
