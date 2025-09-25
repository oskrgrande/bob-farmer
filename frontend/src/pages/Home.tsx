import React from 'react';
import ItemComponent from '@/components/Purchase/ItemComponent';

const Home: React.FC = () => {
    return (
        <div>
            <ItemComponent
                title="Salvadorian Corn"
                price={1.00}
                subtitle="Perfect for roasting, boiling or preparing your favorite recipes."
                description="Get a fresh, top-quality ear of corn directly from local producers. Each piece is carefully selected to guarantee a 100% national, natural, and freshly harvested product."
                reviews={43}
                rating={5}
                image="/corn.webp"
                specifications={{
                    variety: "Sweet yellow corn (Zea mays L.)",
                    origin: "Domestically grown, locally harvested",
                    presentation: "Fresh whole corn on the cob",
                    averageSize: "18 – 22 cm long",
                    approximateWeight: "250 – 300 g"
                }}
            />
        </div>
    );
};

export default Home;