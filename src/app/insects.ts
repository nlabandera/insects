export interface Insect {
    id: number,
    name: string | null,
    type: string,
    description: string
}

export const insects = [
    {
        id: 1,
        name: 'Rigoberta',
        type: 'butterfly',
        description: 'Irure culpa tempor velit id ad ea ad pariatur ipsum ipsum.'
    },
    {
        id: 2,
        name: 'Chuchamba',
        type: 'bee',
        description: 'Qui quis exercitation incididunt cillum ea laboris.'
    },
    {
        id: 3,
        name: null,
        type: 'bee',
        description: 'Qui quis exercitation incididunt cillum ea laboris.'
    }
]