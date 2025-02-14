import { CommentCard } from "../CommentCard";
import { commentsData } from "./commentData";

export function CommentBlock() {
    return (
        <div className='flex gap-3 h-full bg-yellow-400'>
            <div className='w-1/3 justify-center items-center h-full bg-red-500'>LE DESIGN C'EST TOUJOURS MIEUX À</div>
            <div className='w-2/3 flex flex-col gap-6'>
               <div className='flex gap-6'>
                    <div className='w-[350px] h-10 top-0 rounded-b-2xl bg-white opacity-80'></div>
                    <div className='w-[350px] h-10 top-0 rounded-b-2xl bg-white opacity-80'></div>
               </div>
               <div className='flex gap-6'>
                    <div className='flex flex-col gap-6'>
                        <CommentCard 
                            content="Nous avons eu l'occasion de collaborer avec Eugénie sur l'interface de notre application mobile. Nous avons toujours été satisfaits de ses propositions et de son travail !"
                            job='Co-fondateur de Prairy'
                            name='Aurélien Dugelet'
                        />
                        <CommentCard 
                            content="Eugénie a été designer UX/UI pendant plus de 10 années chez Appsolute puis Orkester, avec donc une immense séniorité sur les sujets mobiles et web, pour un grand nombre de marques prestigieuses et sujets très variés.Son engagement et sa qualité d'UI n'a jamais fait défaut et des dizaines et des dizaines de clients de profils variés (grands comptes, scales up, PME, porteurs de projets) ont été ravis de travailler avec elle."
                            job='Co-fondateur de Appsolute'
                            name='Jean Castets'
                        />
                        <CommentCard 
                            content='Vraiment ma meuf elle est trop belle'
                            job='front dev' 
                            name='Kilian Mescam'
                        />
                    </div>
                    <div className='flex flex-col gap-6'>
                    <CommentCard
                            content="Eugénie a une grande capacité d'écoute et de compréhension du besoin client. Elle sait mettre en œuvre sa créativité et son expérience pour y répondre. Elle est également force de proposition, avec des idées très pertinentes pour améliorer le parcours et l'expérience utilisateur.Pour Béaba, elle a créé un univers intégré et sans couture entre l'IHM du Babycook Smart et l'application smartphone. Je recommande fortement les services d'Eugénie." 
                            job='Project owner chez Béaba'
                            name='Raphaël Vieux' 
                        />
                        <CommentCard 
                            content="J'ai eu la chance de collaborer avec Eugénie chez Orkester sur de nombreux projets, tant web que mobiles. Elle excelle dans la conception UX/UI et parvient à transformer des problématiques complexes en interfaces élégantes et fonctionnelles, toujours orientées utilisateur. Cerise sur le gâteau : c'est un bonheur de travailler avec elle ! 
                            Bref, je recommande son profil les yeux fermés : foncez !" 
                            job='Designer UX/UI chez Orkester' 
                            name='Olivier Tavernier'
                        /> 
                    </div>
               </div>
               <div className='flex gap-6'>
                    <div className='w-[350px] h-10 bottom-0 rounded-t-2xl bg-white opacity-80'></div>
                    <div className='w-[350px] h-10 bottom-0 rounded-t-2xl bg-white opacity-80'></div>
               </div>
            </div>
        </div>
    )
}