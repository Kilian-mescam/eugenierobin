import { SkillCard } from "../SkillCard";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";


export function PresentationBlock() {
    return (
        <div className="flex flex-col gap-10 items-center justify-center">
            <div className="flex gap-10">
                <Badge>GRAPHISTE</Badge>
                <Badge>DESIGNER UX/UI</Badge>
                <Badge>FREELANCE</Badge>
            </div>
            <div className="text-center">
                <h1>
                    Je design des interfaces claires et intuitives
                </h1>
                <h4>
                    L'empathie pour améliorer le quotidien, trouver des solutions, générer des émotions
                </h4>
                <div className="p-10">
                    <Button variant="secondary" className="text-white rounded-full">✦ Mes réalisations</Button>
                </div>
                <div className="flex items-center justify-center">
                    <SkillCard label="IMAGE DE MARQUE" image="/images/image-blob-pink.png" content="Je crée des logos et des identités visuelles qui reflètent votre univers et plaisent à votre audience"></SkillCard>
                    <SkillCard label="EXPERIENCE UTILISATEUR" image="/images/image-soleil-orange.png" content="Je conçois des interfaces pour simplifier la vie des utilisateurs et répondre efficacement à leurs besoins"></SkillCard>
                    <SkillCard label="DESIGN D'INTERFACE" image="/images/image-trefle-purple.png" content="J'harmonise les designes en respectant votre charte graphique, les spécialisatés de votre plateforme"></SkillCard>
                </div>
            </div>
        </div>
    ) 
}