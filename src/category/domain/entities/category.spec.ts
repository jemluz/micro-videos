import { Category, CategoryProperties } from './category';

describe('Category', () => {

    test('constructor', () => {
        const props: CategoryProperties = {
            name: 'Movie',
            description: 'Some cool category',
            is_active: true,
            created_at: new Date(),
        }

        const category: any = new Category(props);

        expect(category.name).toBe(props.name);
        expect(category.description).toBe(props.description);
        expect(category.is_active).toBe(props.is_active);
        expect(category.created_at).toBe(props.created_at);
    })
});
