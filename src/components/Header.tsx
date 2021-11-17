import { useEffect, useState } from "react";

//Api
import { api } from '../services/api';

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

export function Header(props: any) {
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
        api.get<GenreResponseProps>(`genres/${props.selectedGenreId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [props.selectedGenreId]);

    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}