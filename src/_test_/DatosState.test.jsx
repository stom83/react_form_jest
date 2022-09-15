import { render, screen } from '@testing-library/react';
import { Datos } from '../Components/Datos';
// import userEv from '@testing-library/user-event';
// import App from '../App';
import { DatosState } from '../Components/DatosState';


describe('Pruebas de Jest', () => {
  describe('Test Campos', () => {
    test('Debe de mostrar texto de campos', ()=>{
      const mocfn = jest.mocfn();
      render(<Datos/>);
      const parrafo = screen.getByText('Anita');
      expect()
      
    });
  });

    test('Primera prueba', () => {
      render(<DatosState />, <Datos/> );

        const nameCard = screen.queryByText(/Tarjetas/i);
        console.log(nameCard);
        expect(nameCard).toBeInTheDocument()
        screen.debug(nameCard);

          }
        )
      }
  );