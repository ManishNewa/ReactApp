import { MainContent } from '../sections/MainContent';
import { Sidebar } from '../layouts/Sidebar';
import '../../../trello.css';

export function Trello() {
    return (
        <div className="flex h-svh">
            <Sidebar />
            <MainContent />
        </div>
    );
}
