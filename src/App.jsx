import './App.css'
import Button from './components/Button'
import { UserList} from './components/UserList'

function App() {
const userName="Enes Kaya"

const isActive= false

const styles={
  h4Style:{backgroundColor:"blue",fontSize:"24px",color:"white",textAlign:"center",}
}

const hobiler=[
  {id:1,name:"Kitap,Manga Okumak",inStock:true},
  {id:1,name:"Müzik Dinlemek",inStock:true},
  {id:1,name:"Dizi,Film ve Anime İzlemek",inStock:true},
  {id:1,name:"Yeni Yerler Gezmek",inStock:false},
  {id:1,name:"Bilgisayar Oynamak",inStock:true},

]

  return (
    <>
<h1 style={{backgroundColor:"blue",listStyle:"none",color:"white",margin:0,padding:0,textAlign:"center"}}>SİTEME HOŞGELDİNİZ</h1>
<hr />
    <h3 style={{backgroundColor:`${isActive?"green":"blue"}`,textAlign:"center",color:"white"}}>Merhaba ben {userName}</h3>
    <hr />
    
    <div style={{textAlign:"center",color:"white",backgroundImage:"URL(https://2.bp.blogspot.com/-OJHQTqRDHmo/UsP6cNL4MlI/AAAAAAAABFg/Y1Uu5k4aJ10/s1600/texture11.jpg)"}}>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ege_University_logo.svg/1200px-Ege_University_logo.svg.png" alt="" style={{float:"left",width:"100px",height:"100px",margin:0,padding:"0 10px 10px 0"}} />
<img src="https://upload.wikimedia.org/wikipedia/tr/6/6d/Esogu_logo.png" alt="" style={{float:"right",width:"100px",height:"100px",margin:"auto",padding:"0 0 10px 10px"}}/>
<h3>Hakkımda</h3>
<p style={{padding:"0 10px 0 0",color:"white",textAlign:"justify"}}>Merhaba! Adım Enes Kaya, 20.01.1992 Bursa/Mustafakemalpaşa'da doğup büyüdüm ve bu yer benim için sadece bir coğrafi konum değil, aynı zamanda anılarla 
dolu bir ev. Eğitim hayatım ise; Anadolu Ticaret Meslek Lisesinden mezun oldum. Üniversite hayatım ise bir yılı hazırlık olan Ege Üniversitesi/Fen Fakültesi/Fizik Bölümünde üç yıl okudum.Daha sonra
bu bölümden ayrılıp Eskişehir Osmangazi Üniversitesi/Eğitim Fakültesi/Bilgisayar ve Öğretim Teknolojileri Öğretmenliği Bölümünden mezun oldum ve bu süreçte edindiğim bilgilerle kendimi sürekli geliştirmeye odaklanıyorum.
Şuanda Üretken Akademi ve Bursa Büyükşehir Belediyesi'nin işbirliğiyle düzenlenen code16 Temel Yazılım Akademisinin katılımcılarından biriyim.
</p>

</div>
<hr />

<h4 style={styles.h4Style}>Hobilerim</h4>
<ul style={{color:"orange",backgroundColor:"black"}}>
  {hobiler
  .filter(item=>item.inStock)
  .map(item=><li key={item.id}>{item.name.toUpperCase()}</li>)

  }
</ul>
<img src="https://eudzr49nzcv.exactdn.com/wp-content/uploads/2020/02/1-9.jpg?strip=all&lossy=1&ssl=1" alt="" style={{border:"1px solid blue",width:"300px",height:"200px",margin:"auto"}} />
<img src="https://birhobiedin.com/wp-content/uploads/2020/05/73.jpg" alt="" style={{border:"1px solid blue",width:"400px",height:"200px",margin:"auto"}} />
<img src="https://www.bilimkurgukulubu.com/wp-content/uploads/2017/02/Home-Theater.jpg" alt="" style={{border:"1px solid blue",width:"400px",height:"200px",margin:"auto"}} />
<img src="https://blog.n11.com/wp-content/uploads/2016/10/ekim-itibariyle-2016da-cikan-11-oyun-9-840x440.jpg" alt="" style={{border:"1px solid blue",width:"400px",height:"200px",margin:"auto"}} />
<img src="https://cdn.pixabay.com/photo/2020/09/21/07/11/runner-5589149_1280.jpg" alt="" style={{border:"1px solid blue",width:"300px",height:"200px",margin:"auto"}} />
<hr />

<h2 style={styles.h4Style}>Sevdiğim Bazı Oyunlar</h2>
<UserList/>
<hr />
<h3 style={styles.h4Style}>code16 Temel Yazılım Akademisi Çalışmalarım</h3>
<div style={{textAlign:"center"}}><h3 style={{textAlign:"center"}}>Hafta 1</h3>
    <img src="src\resim\Hafta1.png" alt='' style={{width:"300px",height:"300px", textAlign:"center",borderRadius:"8px",border:"1px solid #bdc3c7"}}/>
    <br />
    <a href="https://drive.google.com/file/d/1WTFBHJC6roK97c7D3W9lq-3IpWHGk_gg/view?usp=drive_link" target='_blank' style={{textAlign:"center"}}>İndir</a>
    </div><hr />
    <div style={{textAlign:"center"}}><h3 style={{textAlign:"center"}}>Hafta 2</h3>
    <img src="src\resim\Hafta2.png" alt='' style={{width:"300px",height:"300px",borderRadius:"8px",border:"1px solid #bdc3c7"}}/>
    <br />
    <a href="https://drive.google.com/file/d/1YfCuKlnxkOOzQmbZOsjLXQbLyQriM4tx/view?usp=drive_link" target='_blank' style={{textAlign:"center"}}>İndir</a>
    </div><hr />
    <div style={{textAlign:"center"}}><h3 style={{textAlign:"center"}}>Hafta 3</h3>
    <img src="src\resim\Hafta3.png" alt='' style={{width:"500px",height:"300px",borderRadius:"8px",border:"1px solid #bdc3c7"}}/>
    <br />
    <a href="https://drive.google.com/file/d/1ZXa2yY_P2ZfrBgWIl1Eb3KHqWfHPUIgN/view?usp=drive_link" target='_blank' style={{textAlign:"center"}}>İndir</a>
    </div><hr />
    <div style={{textAlign:"center"}}><h3 style={{textAlign:"center"}}>Hafta 4</h3>
    <img src="src\resim\Hafta4.png" alt='' style={{width:"500px",height:"300px",borderRadius:"8px",border:"1px solid #bdc3c7"}}/>
    <br />
    <a href="https://drive.google.com/file/d/1dch6FuD5McxFRzSiBhhtlmDZ3kC52HcB/view?usp=drive_link" target='_blank' style={{textAlign:"center"}}>İndir</a>
    </div>
<hr />
<Button/>
<hr />
<div style={{textAlign:"center"}}>
<a href="https://www.facebook.com/?locale=tr_TR" target='_blank' style={{textAlign:"center",margin:"auto"}}><img src="src\resim\Facebook.png" alt='' style={{width:"50px",height:"50px",padding:"4px",margin:"auto",borderRadius:"8px",border:"1px solid #bdc3c7"}}/></a>
<a href="https://twitter.com" target='_blank' style={{textAlign:"center",margin:"auto"}}><img src="src\resim\twitter-x.png" alt='' style={{width:"50px",height:"50px",padding:"4px",margin:"auto",borderRadius:"8px",border:"1px solid #bdc3c7"}}/></a>
<a href="https://www.instagram.com" target='_blank' style={{textAlign:"center",margin:"auto"}}><img src="src\resim\instagram.png" alt='' style={{width:"50px",height:"50px",padding:"4px",margin:"auto",borderRadius:"8px",border:"1px solid #bdc3c7"}}/></a>
<a href="https://www.linkedin.com" target='_blank' style={{textAlign:"center",margin:"auto"}}><img src="src\resim\linkedin.png" alt='' style={{width:"50px",height:"50px",padding:"4px",margin:"auto",borderRadius:"8px",border:"1px solid #bdc3c7"}}/></a>
</div>
    </>
  )
}

export default App
