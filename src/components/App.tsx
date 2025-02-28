import * as React from "react";
import {useState} from "react";
import * as styles from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import dog3 from '@/assets/dog3.png'
import dog2 from '@/assets/dog2.jpg'
import Dog from '@/assets/dog.svg'

export const App = (): React.JSX.Element => {
  const [count, setCount] = useState(0)
  if (__PLATFORM__ === 'desktop' || __ENV__ === 'development') {
    return (
      <>
        <h1>Desktop</h1>
        <h1>Platform: {__PLATFORM__}</h1>
        <div>
          <img src={dog3} alt="dog" className={styles.picture}/>
          <img src={dog2} alt="dog" className={styles.picture}/>
          <Dog fill='purple' width={200} height={200}/>
        </div>
        <span>
      <Link to='about' className={styles.link}>About</Link>
      <Link to='shop' className={styles.link}>Shop</Link>
      </span>
        <button className={styles.button} onClick={() => setCount((prev) => prev + 1)}>
          {count}
        </button>
        <div>Loremm ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur debitis est ipsam laboriosam,
          magnam magni necessitatibus quidem quis, reiciendis repellat reprehenderit, voluptas? Architecto asperiores
          cum facilis, nihil officia omnis repellat saepe tempore velit veniam. Aperiam aspernatur at autem, culpa
          dolores exercitationem fugit magnam maxime obcaecati quas quibusdam suscipit ut?Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Animi asperiores ducimus excepturi explicabo itaque, iusto, laborum laudantium
          minima molestiae numquam omnis optio quas quisquam quos ratione, repellendus rerum totam vel?
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate est illo, obcaecati quasi qui
            reprehenderit totam velit! Cumque doloribus odit quam! Hic impedit itaque sunt voluptates. A cumque, ullam?
          </div>
          <div>Aperiam corporis debitis dolores harum hic impedit ipsa, natus quas qui quisquam quo quos reiciendis
            saepe, sint unde? Autem earum ex modi nesciunt quos? Blanditiis dolore provident ratione similique voluptas!
          </div>
          <div>Ab aliquam assumenda, at, consequatur debitis deserunt dolor, dolorum earum eligendi eum eveniet ipsum
            iure magnam minima non numquam officia porro reiciendis rerum soluta unde vel veniam voluptatem? Alias,
            tempore!
          </div>
          <div>Accusantium architecto consectetur, cumque esse facere id, modi nulla, officia praesentium ratione sit
            veritatis. Aliquam architecto blanditiis, debitis dicta distinctio eligendi esse fugiat fugit hic iure
            nobis, pariatur quaerat tempora?
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, at cupiditate dolores eius eveniet
            nihil possimus, quia quod sed, suscipit ut voluptate? Accusamus adipisci dicta fugiat, laborum laudantium
            provident reprehenderit?
          </div>
          <div>Ad aliquam asperiores cupiditate deserunt dicta, eligendi enim esse in inventore iste laboriosam
            laudantium nobis nostrum officia possimus quos rem repellendus, rerum sapiente sit. Amet ipsam minus
            molestias quas quasi.
          </div>
          <div>Accusantium, consectetur consequuntur distinctio ex facere facilis, harum illum laborum nam perferendis
            perspiciatis provident quo temporibus veniam vitae voluptates voluptatum. A accusamus laudantium quis
            tempora. Ducimus facilis hic sapiente velit.
          </div>
          <div>Accusantium asperiores assumenda, autem consequuntur cupiditate delectus deserunt dolores ea ex harum in
            incidunt iste labore libero maxime minima minus quaerat quisquam quo, reiciendis repudiandae rerum, sunt
            velit vitae voluptatum.
          </div>
          <div>Autem consequuntur corporis cumque dicta dolore, fugiat impedit officiis pariatur quasi sed tempora velit
            voluptas? Asperiores ducimus maiores provident tempore? Accusamus, alias atque consectetur maiores minus
            natus numquam quia quo?
          </div>
          <div>A ab adipisci aperiam consectetur corporis deserunt eveniet, fuga iusto molestias nobis quod, sequi sunt
            unde? Accusamus alias cum doloribus eos nam! Corporis id ipsum nihil praesentium quam quos vero!
          </div>
          <div>Ab animi asperiores consequatur culpa dicta dignissimos eius eos et exercitationem expedita fugiat in
            ipsum iure, maxime minus nostrum placeat quam, quia quibusdam reiciendis repellat repudiandae sequi sit unde
            vel!
          </div>
          <div>Aspernatur consequuntur, culpa cupiditate enim fugit tempore. A atque blanditiis consequuntur, debitis
            dignissimos, doloremque ea earum esse eum id necessitatibus nihil nulla optio quaerat suscipit tempora
            temporibus ullam vitae voluptatibus.
          </div>
          <div>Aliquam animi cupiditate deserunt eligendi enim eos error est facere fugiat hic in ipsam ipsum itaque
            iure laudantium minus nostrum, nulla odit perferendis placeat quasi quod repellat sint tempora vero?
          </div>
          <div>Aperiam cum deleniti distinctio dolorem, dolorum ea eaque exercitationem id ipsam libero nesciunt odio,
            officia perspiciatis quam recusandae repellat reprehenderit similique soluta sunt temporibus totam vero,
            vitae voluptatum. Numquam, sit?
          </div>
          <div>A ab, assumenda blanditiis cumque dolorum ea earum eos ex hic labore minima molestiae natus nobis non
            nostrum perspiciatis quisquam quod reiciendis sapiente sequi similique temporibus tenetur, vel veritatis
            voluptas!
          </div>
          <div>Accusamus architecto at atque consequatur distinctio doloribus ea earum excepturi explicabo fugit illo
            impedit incidunt inventore iusto labore molestiae neque nesciunt non quasi quos ratione, reiciendis sequi
            sunt ut voluptate!
          </div>
          <div>A modi nam quasi similique? Accusantium atque doloremque, error illo molestias necessitatibus non odio
            omnis perspiciatis praesentium quae quibusdam, quidem quisquam quo quod quos ratione recusandae sequi
            tempora voluptates. Consectetur!
          </div>
          <div>Amet assumenda cum iure necessitatibus quae quia repellendus vitae. Blanditiis dignissimos eius minus
            nemo obcaecati pariatur quas quasi, reiciendis rem unde? Animi eum eveniet excepturi magnam minus modi
            nesciunt, nostrum.
          </div>
          <div>Beatae blanditiis eligendi eos exercitationem hic maiores necessitatibus perferendis ratione. A at atque,
            cum, exercitationem hic ipsa modi mollitia, nam natus nisi odit praesentium quasi quod quos rem saepe
            temporibus!
          </div>
          <div>Aliquam aut, culpa cumque id inventore magni nobis soluta. Accusantium architecto cumque dignissimos enim
            fuga fugiat illum maxime, perspiciatis, quasi quidem quis repudiandae ullam vitae voluptate voluptates.
            Quidem, repellat, tempore?
          </div>
          <div>Ad beatae consequuntur corporis cum dolore error eveniet libero, molestiae nobis recusandae reiciendis
            velit voluptate? Culpa cumque dolores illum iusto laboriosam, nihil nobis quia soluta sunt voluptate. Eaque,
            est voluptatibus!
          </div>
          <div>Adipisci alias aliquid asperiores at cupiditate deserunt dolor eaque, esse explicabo facere facilis,
            fugit ipsam labore maiores nisi nostrum quae quidem quisquam quos rem repellat saepe sapiente voluptatum?
            Autem, corporis.
          </div>
          <div>Adipisci aliquam consequatur culpa eaque eligendi exercitationem explicabo similique voluptatum. Aut eos
            est eveniet excepturi facere hic ipsum iste officiis quia ullam. Dolore ex magnam placeat quidem tenetur
            veniam vero.
          </div>
          <div>Accusamus aliquam debitis et eum iste labore nulla reiciendis similique tenetur voluptate! Ab aliquam
            aliquid, consequatur eos iste itaque maiores praesentium quis quos recusandae rerum sunt tempora veritatis.
            Aspernatur, dolor?
          </div>
          <div>Enim placeat quasi quibusdam reiciendis ullam? Aliquid atque doloremque dolorum eos eum maxime modi neque
            quam quisquam voluptatem. Asperiores, dolor veniam? A, accusantium ad esse illum placeat quibusdam repellat
            sequi.
          </div>
          <div>Accusantium ipsa, rem. Ad adipisci, asperiores assumenda at beatae culpa cum dolorem illo laboriosam non
            nulla placeat quam ratione sapiente, tempora voluptas voluptatem! Debitis eius, error et nesciunt nisi
            pariatur.
          </div>
          <div>A culpa cum cumque dolorum eius excepturi fuga, id ipsum, itaque magni minus molestiae nam natus
            necessitatibus nesciunt nobis obcaecati perspiciatis quibusdam quis quod quos repudiandae sit tempore velit,
            veritatis.
          </div>
          <div>Accusamus amet animi autem consectetur debitis dolor dolore dolorem ducimus error exercitationem facere
            laborum mollitia natus, odio officiis omnis perferendis quo rem reprehenderit, sapiente tempore tenetur
            ullam velit vero voluptatum?
          </div>
          <div>A, accusantium aspernatur beatae blanditiis, eius eveniet expedita hic molestiae non, odio quis
            voluptates. Mollitia odit tempora tenetur. Aspernatur aut corporis dolorem harum in ipsa ipsam molestias
            quae soluta unde.
          </div>
          <div>A aliquid architecto asperiores atque blanditiis dolores doloribus ducimus ea ipsa ipsam, itaque possimus
            quas quis tempora, veniam veritatis, voluptates voluptatum. Beatae dolorem expedita harum ipsum libero.
            Ipsum laudantium, quasi!
          </div>
          <div>A aliquam aliquid assumenda atque commodi consectetur corporis cumque debitis dicta distinctio, dolor,
            doloremque earum, eligendi et eveniet explicabo facere fugit in ipsum magni nam odio perferendis praesentium
            qui quod!
          </div>
          <div>Dolorum eos incidunt magni molestiae vitae. Blanditiis itaque officia quae quaerat quis! Alias,
            aspernatur at magni modi nemo quod totam? Aut autem eius nam quia quibusdam, soluta tempore. Commodi,
            sapiente.
          </div>
          <div>Animi at consectetur cum dolor eaque enim exercitationem facere fuga, iste neque nesciunt omnis pariatur
            perspiciatis, placeat possimus praesentium quasi quod, ullam. Alias error excepturi odio quae sit? Nam,
            temporibus.
          </div>
          <div>Alias, assumenda, commodi cupiditate delectus dolore ea, maiores minima optio perferendis quia
            repellendus soluta vel. Doloribus, error in ipsa laboriosam magnam possimus sapiente! Aperiam enim est neque
            nostrum porro quisquam.
          </div>
          <div>Ex, exercitationem, ipsum! Accusantium aliquam assumenda consequuntur debitis earum hic id illum, laborum
            magni molestias nemo nesciunt odio officia rem reprehenderit rerum soluta velit voluptate voluptates
            voluptatibus. Asperiores neque, quam?
          </div>
          <div>Amet dolor itaque maxime modi nam vitae. A, adipisci aperiam architecto asperiores aut commodi cumque
            delectus distinctio facere iure natus omnis pariatur quaerat quibusdam quis rem similique sint ut voluptas!
          </div>
          <div>Aperiam, cumque dolor doloribus ea eaque earum eveniet explicabo facilis fugiat harum in iusto laborum
            modi nihil officiis, praesentium quaerat quisquam quo ratione rem sapiente sint sit velit voluptatibus
            voluptatum.
          </div>
          <div>Accusantium corporis culpa, doloribus earum et eum iure quia reiciendis sequi. Ab aliquam at, consectetur
            consequatur consequuntur eius esse illo iusto reiciendis repellat repellendus soluta tempore temporibus
            totam veritatis vero.
          </div>
          <div>Ab, asperiores aspernatur autem beatae consectetur corporis culpa debitis doloremque explicabo hic
            incidunt ipsum itaque maiores nam officia officiis pariatur, quasi saepe similique vel. Adipisci consectetur
            earum molestias possimus reiciendis!
          </div>
          <div>Aut consequatur, culpa earum enim inventore nihil obcaecati officia, officiis possimus quia quibusdam
            quidem similique suscipit tempora ullam. Adipisci autem culpa debitis deleniti dolores laborum omnis placeat
            soluta veritatis voluptas?
          </div>
          <div>A, ad, aliquam corporis culpa dignissimos distinctio fugiat iure labore magnam magni molestias odio
            possimus quas rem tempora tempore voluptates! Culpa deserunt est ipsum itaque recusandae sit voluptates!
            Consequatur, id?
          </div>
          <div>Aliquid assumenda commodi dolores dolorum error et ex facilis, incidunt iusto magnam maxime nam officia
            omnis pariatur placeat possimus repudiandae sint soluta, sunt tempora tenetur ullam voluptatem? Ipsa,
            magnam, saepe.
          </div>
          <div>Aliquam debitis delectus facere ipsam. Ab consequatur eius, eveniet exercitationem fugiat nobis
            perspiciatis sint soluta. Aperiam dolores est libero quod similique sit tenetur velit! Commodi nesciunt
            optio quaerat quibusdam reprehenderit?
          </div>
          <div>Doloribus est et explicabo fugiat illum necessitatibus, possimus, quia repudiandae sunt veritatis
            voluptatem voluptates? Ab accusamus enim eum facere facilis in obcaecati omnis placeat quisquam. Consequatur
            hic mollitia nisi voluptatem.
          </div>
          <div>Error ipsum iusto laboriosam molestiae perspiciatis, recusandae veniam. A accusamus doloremque ducimus
            esse fuga fugit hic ipsam iure laborum minus natus non perspiciatis placeat provident quidem ratione,
            repellendus tempore ut.
          </div>
          <div>Animi consectetur debitis, distinctio dolorum ea eos eum laudantium mollitia, pariatur voluptas,
            voluptatem voluptatibus? Ab at corporis, dolor doloremque dolores eius facere illum modi, nemo omnis quam
            sed sint soluta?
          </div>
          <div>Ad ex ipsa suscipit ullam? Consectetur dolorum, ea earum eligendi id labore laudantium optio perferendis
            quam quidem? Dicta dignissimos quia repudiandae. A assumenda, delectus eligendi nihil omnis quas quibusdam
            voluptatem?
          </div>
          <div>A debitis facilis magni repudiandae similique voluptatem! Ab accusantium adipisci amet beatae deserunt
            dignissimos dolores eaque eos ex fugit, id in iste itaque maiores mollitia nihil officiis quasi quod
            tempora!
          </div>
          <div>Blanditiis, enim esse eveniet iste repellat temporibus! Amet, aperiam, blanditiis consectetur, cumque
            dignissimos natus nihil quidem quisquam quod sed sequi soluta tempore veniam vero vitae? Iste iure
            praesentium provident quisquam!
          </div>
          <div>Debitis dignissimos earum laboriosam quibusdam quos soluta. Accusantium alias corporis dolores eligendi
            fugiat illum incidunt iste laborum libero minima neque officia porro, quae quasi quis repellat reprehenderit
            sapiente tenetur vel.
          </div>
          <div>Accusamus ad adipisci aliquid animi atque, beatae deleniti dicta dignissimos distinctio dolor dolorem
            dolorum eligendi error facilis minima mollitia natus nemo obcaecati praesentium provident qui quidem quo
            repellendus sed, voluptatem?
          </div>
          <div>A accusantium commodi consequatur delectus deleniti, dolor dolorem eius eos et eum facere incidunt iste
            mollitia nostrum perspiciatis placeat possimus praesentium quisquam quos repellat sapiente sequi similique
            tempora temporibus veritatis?
          </div>
          <div>Aperiam at dicta distinctio tempore. A asperiores, consequuntur culpa delectus distinctio, doloribus eos,
            expedita explicabo illum laudantium officia officiis quis quo vero voluptatibus? Adipisci aliquam animi
            impedit ipsam itaque sequi!
          </div>
          <div>Ad consectetur facilis fugit, maxime modi nesciunt officia perferendis quibusdam repellat reprehenderit
            sequi sint totam ullam? Amet aspernatur blanditiis commodi, eos incidunt ipsa, labore molestiae rerum
            similique, tempora ullam vero.
          </div>
        </div>
        <Outlet/>
      </>
    )
  }

  if (__PLATFORM__ === 'mobile') {
    return (<h1>Mobile</h1>)
  }
}
