import React from 'react';
import ItemComponent from '@/components/Purchase/ItemComponent';

const Home: React.FC = () => {
    return (
        <div>
            <ItemComponent
                title="Salvadorian Corn"
                price={1.00}
                description="Perfect for roasting, boiling or preparing your favorite recipes. Enjoy the sweet and tender flavor of our Salvadorian corn, harvested at its peak for the best taste."
                reviews={43}
                rating={5}
                image="/corn.webp"
                specifications={{
                    variety: "Sweet Corn",
                    origin: "USA",
                    presentation: "Ear",
                    averageSize: "7-8 inches",
                    approximateWeight: "0.5 lbs"
                }}
            />
        </div>
    );
};

export default Home;