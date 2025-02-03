import type { CharEntry } from '../domain/CharEntry';
import { getAllCharacters } from '../domain/CharacterRegistry';
import { searchCharacters } from '../domain/SearchCharacters';

export class SearchCharactersUseCase {
  execute(query: string): readonly CharEntry[] {
    return searchCharacters(query, getAllCharacters());
  }
}
