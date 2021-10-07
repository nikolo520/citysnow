
import './App.css';
import Menu from './components/Menu';
import Board from './components/Board';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState({'articles':[],'weather':{},'history':[]});
  const[textInput, setTextInput]= useState('');
  const handleChange=e=>{
      const {name, value} = e.target;
      setTextInput({
          ...textInput,
          [name]:value
      })
  }
  // const api_key_newsapi = "1f689dc583ac485bb742e145f348bbcf"
  // const api_key_openw = "3c8b3f0976f6ec841aa878e05d98bab5"
  // var baseUrlNews = "https://newsapi.org/v2/everything?"+
  //                   "sortBy=popularity"+
  //                   "&from=2021-09-05"+
  //                   "&apiKey=" + api_key_newsapi;
  // var baseUrlOpen = "https://api.openweathermap.org/data/2.5/weather?"+
  //                 "&units=metric" +
  //                 "&appid=" + api_key_openw;

  // const get_data = () =>{
  //   if (typeof(textInput.city) !== 'undefined'){
  //     // Si no hay nada escrito en el buscador, se obtiene la ubicación actual para la busqueda
  //     baseUrlNews += "&q=" + textInput.city;
  //     baseUrlOpen += "&q=" + textInput.city;
  //   }else{
  //     // if (navigator.geolocation) {
  //     //   navigator.geolocation.getCurrentPosition(function(position){
  //     //     baseUrlNews += "&q=" + textInput.city;
  //     //     baseUrlOpen += "&lat=" + position.coords.latitude.toString() +"&lon=" + position.coords.longitude.toString();
  //     //   });
  //     // }else{
  //       console.log("No se pudo acceder a la geolocalización")
  //     //}
  //   }
  //   //var weather={'weather':[{'icon':'02d'}],'main':{'temp':26,'temp_min':17,'temp_max':27,'pressure':150,'humidity':320,'feels_like':29}}
  //   //var articles =
  //   //{"status":"ok","totalResults":1035,"articles":[{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Top ELN rebel commander dies of bombing injuries, Colombia gov't says - Reuters","description":"A top leader of Colombia's National Liberation Army (ELN) rebels died on Tuesday of injuries sustained in a military bombing in the country's northwest, Defense Minister Diego Molano said.","url":"https://www.reuters.com/world/americas/top-eln-rebel-commander-dies-bombing-injuries-colombia-govt-says-2021-09-28/","urlToImage":"https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=53","publishedAt":"2021-09-28T15:18:00Z","content":"BOGOTA, Sept 28 (Reuters) - A top leader of Colombia's National Liberation Army (ELN) rebels died on Tuesday of injuries sustained in a military bombing in the country's northwest, Defense Minister D… [+1603 chars]"},{"source":{"id":null,"name":"The Guardian"},"author":"Joe Parkin Daniels in Bogotá","title":"Afro-Colombian moonshine gets official seal of approval as heritage drink","description":"Viche – traditionally produced by women on the Pacific coast – is poised to be for Colombia what mezcal is for Mexico, experts sayLucía Solís, an Afro-Colombian artisan distiller from Buenaventura on Colombia’s Pacific coast, has spent much of her life making…","url":"https://amp.theguardian.com/world/2021/sep/19/viche-afro-colombian-liquor-heritage","urlToImage":"https://i.guim.co.uk/img/media/63655d49b7796d9c0ac2099c52496a1cf14f82ea/0_42_1280_768/master/1280.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0821107c34cb7149bbdd6b362d7f6399","publishedAt":"2021-09-19T11:50:35Z","content":"Lucía Solís, an Afro-Colombian artisan distiller from Buenaventura on Colombias Pacific coast, has spent much of her life making and selling viche, a pungent liquor believed to cure snakebites. Now, … [+2539 chars]"},
  //   //{"source":{"id":null,"name":"The Guardian"},"author":"Ammar Kalia","title":"Quantic and Nidia Góngora: Almas Conectadas review – Colombian gold-panners go orchestral","description":"(Tru Thoughts)Pacific coast cantora Góngora’s nature-rooted compositions are given larger dimensions by British electronica producer QuanticHailing from Timbiquí, a small gold-panning community on the Pacific coast of Colombia, folk singer Nidia Góngora’s mus…","url":"https://amp.theguardian.com/music/2021/sep/17/quantic-and-nidia-gongora-almas-conectadas-review","urlToImage":"https://i.guim.co.uk/img/media/1a27fde292840bdd8a3916683319a7b5a2485ed0/0_241_4899_2941/master/4899.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=3b7e946258684c1168fc9d8cc2afaf45","publishedAt":"2021-09-17T08:00:40Z","content":"Hailing from Timbiquí, a small gold-panning community on the Pacific coast of Colombia, folk singer Nidia Góngoras music is intimately connected with the natural world. Traditionally, women who sift … [+2636 chars]"},{"source":{"id":null,"name":"CNET"},"author":"Oscar Gonzalez","title":"Ivermectin and COVID-19: What you need to know about this unproven drug - CNET","description":"People continue taking a horse dewormer, thinking it's a treatment for COVID.","url":"https://www.cnet.com/news/ivermectin-and-covid-19-what-you-need-to-know-about-this-unproven-drug/","urlToImage":"https://www.cnet.com/a/img/jgMwIpj1Y4dBv1x5aRPszuEYARY=/1200x630/2021/09/03/7f8189e9-fc00-4502-bb9c-a1c22dfc66b3/gettyimages-1235007289.jpg","publishedAt":"2021-09-15T17:29:00Z","content":"Ivermectin continues to fly off shelves. \r\nGetty Images\r\nIvermectin was one of many drugs medical professionals reviewed for repurposing early on in the COVID-19 pandemic. Some doctors gave the anti-… [+13937 chars]"},{"source":{"id":"business-insider","name":"Business Insider"},"author":"gdean@insider.com (Grace Dean)","title":"Subway says its menu refresh boosted sales to an 8-year high. It added new sandwiches, new bread options, and a parmesan vinaigrette.","description":"Subway updated its menu with 11 new and improved ingredients, six new or returning sandwiches, and four revamped sandwiches. Sales spiked, it said.","url":"https://www.businessinsider.com/subway-menu-refresh-revamp-eat-fresh-sales-sandwiches-fast-food-2021-9","urlToImage":"https://i.insider.com/6149bd0dc2c9630018f58a23?width=1200&format=jpeg","publishedAt":"2021-09-21T12:00:00Z","content":"Subway says weekly sales hit an eight-year high after what its CEO called the brand's biggest-ever menu refresh.\r\nThe sandwich chain updated its menu in July with 11 new and improved ingredients, six… [+2427 chars]"},{"source":{"id":null,"name":"INSIDER"},"author":"Matthew Loh","title":"Police said they have detained an American Airlines passenger who walked on the wing of a plane after it landed in Miami","description":"The passenger opened an emergency door as the plane was taxiing and jumped off the wing when officers arrived, authorities said.","url":"https://www.insider.com/police-arrest-american-airlines-passenger-walking-on-wing-plane-2021-9","urlToImage":"https://s.yimg.com/ny/api/res/1.2/wQr3hhicsth.je_kVZY8.Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/uu/api/res/1.2/B1orMym.aXUfdhMflbNbCA--~B/aD0yMjE4O3c9Mjk1NzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/20cc7d8444baadc90cc535668186622c","publishedAt":"2021-09-30T03:35:14Z","content":"American Airlines planes are seen at the gates at Miami International Airport on August 1, 2021. DANIEL SLIM/AFP via Getty Images\r\n<ul><li>Police detained an American Airlines passenger who walked on… [+1680 chars]"},{"source":{"id":null,"name":"BuzzFeed News"},"author":"Stephanie McNeal","title":"Acacia Kersey Is Done Being The Internet's Punching Bag","description":"After a decade of being one of the most controversial figures on the internet, Acacia Kersey has had enough.View Entire Post ›","url":"https://www.buzzfeednews.com/article/stephaniemcneal/acacia-kersey-quits","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2021-09/30/21/campaign_images/670c2600d172/one-of-the-most-hated-influencers-on-the-internet-2-539-1633039024-2_dblbig.jpg?resize=1200:*","publishedAt":"2021-10-01T12:05:05Z","content":"This is an excerpt from Please Like Me, BuzzFeed News newsletter about how influencers are battling for your attention.You can sign up here.\r\nFor more than a decade, Acacia Kersey has been one of the… [+6308 chars]"},{"source":{"id":null,"name":"TMZ"},"author":"TMZ Staff","title":"Farrah Abraham Looking at Law Schools After Harvard Beef, Including Yale","description":"Farrah Abraham has her heart set on attending law school, possibly in the Ivy League -- on the heels of her Harvard beef -- and she says Harvard's fiercest rival is interested. We got the former \"Teen Mom\" star at Debbie Durkin's EcoLuxe Lounge…","url":"https://www.tmz.com/2021/09/19/farrah-abraham-law-school-harvard-beef-yale/","urlToImage":"https://imagez.tmz.com/image/59/16by9/2021/09/17/59901f0f9a504c9796e7459a0b46f56b_xl.jpg","publishedAt":"2021-09-19T08:00:03Z","content":"Farrah Abraham has her heart set on attending law school, possibly in the Ivy League -- on the heels of her Harvard beef -- and she says Harvard's fiercest rival is interested.\r\nWe got the former \"Te… [+1407 chars]"},{"source":{"id":null,"name":"IndieWire"},"author":"Steve Greene","title":"2021 Emmys Winners List: Every Winner from the Creative Arts Emmy Awards — Updating Live","description":"The past year's achievements in television will be honored over two weekends, starting Saturday with the first Creative Arts Emmy Awards ceremony.","url":"https://www.indiewire.com/feature/2021-emmys-winners-list-1234663033/","urlToImage":"https://www.indiewire.com/wp-content/uploads/2021/07/Emmy-Statue.jpg?w=780","publishedAt":"2021-09-11T21:00:01Z","content":"Below, IndieWire will be providing live updates of this year’s Emmy winners across all four 2021 ceremonies.The Creative Arts Emmy Awards will be given out over three separate ceremonies starting wit… [+17090 chars]"},{"source":{"id":"al-jazeera-english","name":"Al Jazeera English"},"author":"Al Jazeera","title":"Top ELN rebel commander dies after bombing, Colombia gov’t says","description":"ELN leader Angel Padilla Romero, known as Fabian, died in hospital after a military bombing, defence minister says.","url":"https://www.aljazeera.com/news/2021/9/28/top-eln-rebel-commander-dies-after-bombing-colombia-govt-says","urlToImage":"https://www.aljazeera.com/wp-content/uploads/2021/09/2021-02-11T195359Z_2050091375_RC2JQL96UD3D_RTRMADP_3_COLOMBIA-SECURITY.jpg?resize=1200%2C630","publishedAt":"2021-09-28T19:22:36Z","content":"A top commander of Colombias National Liberation Army (ELN) rebel group has died of injuries sustained in a military bombing, the government said.\r\nAngel Padilla Romero, known by his alias Fabian, he… [+2570 chars]"},{"source":{"id":"al-jazeera-english","name":"Al Jazeera English"},"author":"Steven Grattan","title":"Colombia’s ELN rebels warn of ‘reprisals’ after commander killed","description":"Experts say rise in attacks likely after top commander of leftist ELN armed group died after Colombia military bombing.","url":"https://www.aljazeera.com/news/2021/10/1/colombia-eln-rebels-warn-of-reprisals-after-commander-killed","urlToImage":"https://www.aljazeera.com/wp-content/uploads/2021/10/2021-09-02T110110Z_903002744_RC2HYY88RVHR_RTRMADP_3_VENEZUELA-CRIME-GUERRILLA.jpg?resize=1200%2C630","publishedAt":"2021-10-01T17:45:51Z","content":"Bogota, Colombia Colombias largest remaining armed group has warned of reprisals after a government bombing killed one of its top commanders this week, prompting experts to predict a rise in attacks.… [+5574 chars]"},{"source":{"id":"al-jazeera-english","name":"Al Jazeera English"},"author":"Thomas Power, Cruz Bonlarron Martínez","title":"Analysis: How free trade has harmed Colombia’s Black communities","description":"Efforts to open up Colombia’s economy have caused displacement, poverty and violence for Afro-Colombian communities.","url":"https://www.aljazeera.com/features/2021/9/8/analysis-how-free-trade-has-harmed-black-communities-in-colombia","urlToImage":"https://www.aljazeera.com/wp-content/uploads/2021/07/AP316380422236.jpg?resize=1200%2C630","publishedAt":"2021-09-08T11:25:57Z","content":"In 2013, US Vice President Joe Biden visited Colombia and met with then-President Juan Manuel Santos to cement ties between the two countries. Just a year before, a Free Trade Agreement (FTA) had bee… [+17124 chars]"},{"source":{"id":"bloomberg","name":"Bloomberg"},"author":"Daniel Cancel","title":"South America's Much-Needed Respite","description":"Here’s the latest news from the pandemic.","url":"https://www.bloomberg.com/news/newsletters/2021-10-01/south-america-s-much-needed-respite","urlToImage":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8Fq.CvDodTw/v1/1200x800.jpg","publishedAt":"2021-10-01T11:12:10Z","content":"Heres the latest news from the pandemic.\r\nSouth Americas much-needed respite\r\nSouth America, a region of 420 million people stretching from the Caribbean Sea to Antarctica, has been particularly puni… [+3421 chars]"},
  //   //{"source":{"id":null,"name":"Variety"},"author":"John Hopewell","title":"Guadalajara Co-Production Meetings: Mexican Fest Hosts Projects from Latin America’s Independent Scene","description":"Each year the Guadalajara Film Festival (FICG) invites a crop of the most exciting projects from around Latin America to participate in its Co-Production Meetings. This year, organizers are excited to welcome back in-person visitors for its rescheduled 17th e…","url":"https://variety.com/2021/film/festivals/guadalajara-ficg-co-production-meetings-2021-1235078809/","urlToImage":"https://variety.com/wp-content/uploads/2021/10/Ana-Tamae-Shawn.jpg?w=1000","publishedAt":"2021-10-01T16:35:01Z","content":"Each year the Guadalajara Film Festival (FICG) invites a crop of the most exciting projects from around Latin America to participate in its Co-Production Meetings. This year, organizers are excited t… [+9105 chars]"},
  //   //{"source":{"id":null,"name":"Variety"},"author":"Ethan Shanfeld","title":"2021 Creative Arts Emmys: Winners List (Updating Live)","description":"The Creative Arts Emmy Awards are under way in downtown Los Angeles, kicking off the last lap of Emmy season. This year’s Creative Arts ceremonies, held in a tent on the L.A. Live events deck in downtown Los Angeles, will be split into three events over two d…","url":"https://variety.com/2021/tv/awards/2021-emmys-creative-arts-winners-full-list-1235059381/","urlToImage":"https://variety.com/wp-content/uploads/2020/07/product-stock5005.jpg?w=1000","publishedAt":"2021-09-12T00:03:26Z","content":"The Creative Arts Emmy Awards are under way in downtown Los Angeles, kicking off the last lap of Emmy season.\r\nThis year’s Creative Arts ceremonies, held in a tent on the L.A. Live events deck in dow… [+102005 chars]"},{"source":{"id":"associated-press","name":"Associated Press"},"author":null,"title":"Man opens emergency door, jumps onto wing of plane in Miami...","description":"MIAMI (AP) — A passenger on an American Airlines flight that landed at Miami International Airport opened an emergency door and walked onto the wing as the plane reached the terminal, authorities said.","url":"https://apnews.com/article/miami-483f6805eee6f38310873c65f432b794","urlToImage":"https://storage.googleapis.com/afs-prod/media/afs:Medium:751921853724/700.png","publishedAt":"2021-09-30T13:04:36Z","content":"MIAMI (AP) A passenger on an American Airlines flight that landed at Miami International Airport opened an emergency door and walked onto the wing as the plane reached the terminal, authorities said.… [+551 chars]"},{"source":{"id":null,"name":"Uol.com.br"},"author":"James Whitbrook","title":"Quem é quem no novo live-action de Cowboy Bebop da Netflix","description":"Saiba aqui quais atores estão dando vida aos personagens dessa animação icônica.\nThe post Quem é quem no novo live-action de Cowboy Bebop da Netflix appeared first on Gizmodo Brasil.","url":"https://gizmodo.uol.com.br/quem-e-quem-no-novo-live-action-de-cowboy-bebop-da-netflix/","urlToImage":"https://i2.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/09/Cowboy_Bebop_1.png?fit=1000%2C563&ssl=1","publishedAt":"2021-09-28T16:02:45Z","content":"O live-action de Cowboy Bebop só estreia no final do ano. Mas já deu para sacar que a Netflix parece ter recriado o anime de forma fiel — pelo menos é o que indica a abertura da adaptação. Essa impre… [+5865 chars]"},{"source":{"id":null,"name":"ESPN"},"author":"Tory Barron","title":"Jameis, Justin Fields and the Browns -- oh, my: What you might have missed in a wild Week 1","description":"And just like that, NFL football is back. From Carolina's debut of its mixed-reality panther (and its new QB1) to the Browns keeping a certain undesirable streak alive, here's what you might have missed from a jam-packed first NFL Sunday of the season.","url":"https://www.espn.com/nfl/story/_/id/32200677/have-missed-wild-nfl-week-1","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0912%2Fr908337_1296x729_16%2D9.jpg","publishedAt":"2021-09-13T12:10:24Z","content":"So how 'bout that NFL Sunday? If you woke up cursing your fantasy football roster decisions while simultaneously longing for it to be 1 p.m. ET next Sunday so you can slip back into a blissful existe… [+6514 chars]"},{"source":{"id":null,"name":"ESPN"},"author":"Nick Wagoner","title":"49ers sign Norman to address secondary depth","description":"The 49ers signed veteran cornerback Josh Norman to a one-year deal Monday, addressing their secondary depth heading into the season-opener against the Lions.","url":"https://www.espn.com/nfl/story/_/id/32160546/san-francisco-49ers-sign-josh-norman-address-secondary-depth","urlToImage":"https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0912%2Fr744624_1296x729_16%2D9.jpg","publishedAt":"2021-09-06T18:07:20Z","content":"SANTA CLARA, Calif. -- In search of more secondary depth heading toward the season opener, the San Francisco 49ers are bringing in former All-Pro cornerback Josh Norman.\r\nNorman signed a one-year dea… [+1290 chars]"},{"source":{"id":"marca","name":"Marca"},"author":"marca.com","title":"Un pasajero sale de un avión por la puerta de emergencia situada en el ala","description":"Todos sabemos que una de las cosas más tediosas de viajar en avión, y la lista es casi interminable, es abandonar la nave una vez que has llegado a tu destino. Como estés sentado e","url":"https://www.marca.com/tiramillas/actualidad/2021/10/02/615851c2268e3e70388b45ad.html","urlToImage":"https://ak.uecdn.es/p/110/thumbnail/entry_id/0_sc3mk4fq/width/657/type/2/bgcolor/000000/0_sc3mk4fq.jpg","publishedAt":"2021-10-02T12:34:29Z","content":"Todos sabemos que una de las cosas más tediosas de viajar en avión, y la lista es casi interminable, es abandonar la nave una vez que has llegado a tu destino. Como estés sentado en una de las última… [+1409 chars]"}]};
  //   // axios.get(baseUrlNews)
  //   // .then(res => res.data)
  //   // .catch (response => {
  //   //     console.log(response)
  //   //     if(response.data.status === "ok"){
  //   //       setData({'articles':response.data.articles,'weather':data.weather});
  //   //     }else{
  //   //       setData(emptyState);
  //   //     }
  //   // }).catch(error=>{
  //   //   setData({'articles': [],'weather':data.weather});
  //   //   console.log(baseUrlNews)
  //   //   console.log("Error al intentar consular las noticias");
  //   // })
  //   // axios.get(baseUrlOpen)
  //   // .then(response=>{
  //   //   setData({'articles': data.articles,'weather':response.data});
  //   // }).catch(error=>{
  //   //   setData({'articles': data.articles,'weather':{}});
  //   //   console.log(baseUrlOpen)
  //   //   console.log("Error al intentar consular el tiempo");
  //   // })
  //   //console.log({'articles': articles.articles,'weather':weather})
  //   //setData({'articles': articles.articles,'weather':weather});
  // }
  const get_data = () =>{
    if (textInput.city !== ''){
      var baseUrlNews = "http://localhost:42219/api/city/" + textInput.city;
      axios.get(baseUrlNews)
      .then(response => {
          data.history.push(textInput.city)
          if(response.data[0].status){
            setData({'articles':response.data[0].articles,'weather':response.data[0].weather,'history':data.history});
          }else{
            setData({'articles':[],'weather':{},'history':data.history});
          }
      }).catch(error=>{
        setData({'articles':[],'weather':{},'history':data.history});
        console.log("Error al intentar consultar los datos");
      })
    }else{
      setData({'articles':[],'weather':{},'history':data.history});
    }
  };
  useEffect(()=>{
    get_data();
  },[]);

  return (
    <div className='App'>
      <Menu
        nameapp="Citysnow"
        logoapp= "http://openweathermap.org/img/wn/02d@2x.png"
        data={data}
        onInputChange={handleChange}
        search={setData}
        get_data={get_data}
        />
      <Board data={data}/>
    </div>
  );
}

export default App;
