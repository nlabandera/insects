export interface Insect {
    id: number,
    name: string,
    type: string,
    description?: string | undefined
}

export let count: number = 4;

export const insects = [
    {
        id: 1,
        name: 'Rigoberta',
        type: 'butterfly',
        description: 'Deserunt consectetur labore fugiat laborum officia non tempor aute do labore. Velit est elit velit laboris laboris est duis amet culpa cillum. Irure cupidatat magna qui et sit.'
    },
    {
        id: 2,
        name: 'Chuchamba',
        type: 'bee',
        description: 'Proident esse exercitation irure laborum esse et magna. Ad sunt do cillum ad aliquip officia aliqua pariatur reprehenderit. Velit anim ex dolor irure laborum et dolor eiusmod voluptate. Incididunt commodo qui tempor tempor sint esse do.'
    },
    {
        id: 3,
        name: 'Margarita',
        type: 'bee',
        description: undefined
    }
]