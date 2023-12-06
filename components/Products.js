import styles from "../styles/Products.module.css";
import Link from "next/link";
import React from "react";
import "antd/dist/antd.css";
import { Popover } from "antd";

function Products() {
  const products = [
    {
      image: "/fond-morningNews.png",
      name: "Morning News",
      lien: "https://morningnews-frontend-eta.vercel.app/",
      content:
        "Morning News est une application qui va vous permettre d’afficher les nouvelles récentes du journal The Verge grâce à NewsAPI un webservice spécialisé dans la diffusion de nouvelles classées par source. Vous pourrez également sauvegarder vos articles préférés et les retrouver en vous connectant à votre compte. Il y a des restrictions d’usages qui bloquent l’usage de la fonctionnalité bookmarks aux personnes qui ne sont pas connectées. Vous pourrez rester connectés et conserver vos articles favoris même lorsque vous rafraîchirez la page. Il existe la possibilité de masquer certains articles, ceux que vous avez déjà lus par exemple. Cette application est développée en React avec différentes briques techniques comme : la navigation, l'authentification, Redux, l'ajout d'un token, le hachage du mot de passe utilisateur, la persistance du store.",
    },
    {
      image: "/fond-mymoviz.png",
      name: "My Moviz",
      lien: "https://mymoviz-frontend-m8d5e3qfv-x3nc3s-projects.vercel.app/",
      content: "My Moviz est un site qui va vous permettre d’afficher les derniers films sortis grace à l’API The Movie Database avec la possibilité de créer une wishlist, placer un compteur de vues et d’évaluer chacun des films présentés. La particularité de cette appli est qu’elle est développée en React.",
    },
    {
      image: "/fond-yams.png",
      name: "Yams",
      lien: "https://yams-chi.vercel.app/",
      content: "Yams est une application qui simule une partie de jeux de Yams. Vous pourrez lancer et relancer les dés de façon globale (avec le bouton launch) ou de façon individuelle en lançant un dé à la fois. Un compteur vous indiquera le total de l'ensemble des dés lancés. Cette application est réalisée en react avec nextJs et utilise plusieurs composants qui interagissent grâce à different états et évènements ainsi que le principe d'inverse data flow",
    },
    {
      image: "/fond-tickethack.png",
      name: "Ticket Hack",
      lien: "https://tickethack-frontend-phi.vercel.app/",
      content: "Ticket Hack est un site de réservation de billets de trains. C'est le premier projet fait en autonomie de A à Z apres 3 semaines de formation. Cette application est conçu avec le DOM et comporte différentes pages du frontend et du backend avec la gestion d'une base de données Mongo DB . Si vous voulez essayer les differentes options vous devez savoir que seuls des voyages entre les villes de Paris, Lyon, Marseille, Bruxelles entre le 07/11/2023 et le 21/11/2023 sont répertoriés dans la base de données.",
    },
  ];

  const productsCards = products.map((product, i) => {
    return (
      <div key={i} >
        <Link href={product.lien}>
            <a style={{ textDecoration: "none", color: "inherit" }}>
              <div
                key={i}
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "contain",
                  backgroundSize: "cover",
                  backgroundRepeat: 'no-repeat',
                }}
                className={styles.productCard}
              ><div className={styles.overlayStyle}><h2 style={{color: "white"}}>{product.name}</h2><p style={{color: "white", marginRight: 30, marginLeft: 30, textAlign:"center"}}>{product.content}</p></div></div>
            </a>
        </Link>
      </div>
    );
  });

  return <div className={styles.main}>{productsCards}</div>;
}

export default Products;
