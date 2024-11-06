import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir dois comentários', async () => {
        render(<PostComment />);
    
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'comentário um' }
        });
        fireEvent.click(screen.getByTestId('comment-btn'));
    
        await screen.findByText('comentário um');
    
       expect(screen.getByText('comentário um')).toBeInTheDocument();
    
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: { value: 'comentário dois' }
        });
        fireEvent.click(screen.getByTestId('comment-btn'));
    
        await screen.findByText('comentário dois');
    
        expect(screen.getByText('comentário dois')).toBeInTheDocument();
    
         expect(screen.getAllByTestId('comment-li')).toHaveLength(2);
    });
    
});
    
      