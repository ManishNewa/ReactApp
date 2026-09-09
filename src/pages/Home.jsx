import { Hero } from '../components/Hero';
import { Trending } from '../components/Trending';

export function Home() {
    return (
        <div className="h-full overflow-hidden">
            <Hero />
            <Trending />
        </div>
    );
}
