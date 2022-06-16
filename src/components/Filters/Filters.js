import React from 'react';
import FilterSelect from '../FilterSelect/FilterSelect';
import FilterDate from '../FilterDate/FilterDate';
import logo from '../../assets/images/airbnb_logo.png';
import usuario from '../../assets/images/usuario.png';

const Filters = ({ filters, onFilterChange }) => {
  const handleDateChange = (event) => {
    //3) Handle change and call onFilterChange
    //console.log(event.target.value)
    let payload = filters;
    //console.log(payload, "antes")
    payload[event.target.name] = event.target.value;
    //console.log(payload, "despues")

    onFilterChange(payload);
  };

  const handleSelectChange = (event) => {
    //3) Handle change and call onFilterChange
    //console.log(event.target.value)
    let payload = filters;
    //console.log(payload, "antes")
    payload[event.target.name] = event.target.value;
    //console.log(payload, "despues")

    onFilterChange(payload);
  };

  return (
    <nav className='navbar is-info' /*style={{ justifyContent: 'center' }}*/>
      <div className='container'>
        <div className='navbar-brand'>
        <div className="navbar-item has-text-weight-bold has-text-black" style={{ flexDirection: 'column' }}>
            <img src={logo} alt=""/>
            <p>Airb-n-Maimo</p>
          </div>

        </div>
        <div className='navbar-item' style={{ margin: '0 auto' }}>
          <div className='navbar-item'>
            <FilterDate //4) Complete date - DONE
              date={filters.dateFrom}
              name='dateFrom'
              onDateChange={handleDateChange}
            />
          </div>
          <div className='navbar-item'>
            <FilterDate //4) Complete date - DONE
              date={filters.dateTo}
              name='dateTo'
              onDateChange={handleDateChange}
            />
          </div>
          <div className='navbar-item'>
            <FilterSelect
              options={[
                { value: 'select', name: 'Seleccione un Pais' },
                { value: 'Argentina', name: 'Argentina' },
                { value: 'Brasil', name: 'Brasil' },
                { value: 'Chile', name: 'Chile' },
                { value: 'Uruguay', name: 'Uruguay' },
              ]}
              name='country'
              selected={filters.country}
              onSelectChange={handleSelectChange}
            />
          </div>
          <div className='navbar-item'>
            <FilterSelect
              options={[
                { value: 'select', name: 'Seleccione un Precio' },
                { value: '1', name: '$' },
                { value: '2', name: '$$' },
                { value: '3', name: '$$$' },
                { value: '4', name: '$$$$' },
              ]}
              name='price'
              selected={filters.price}
              onSelectChange={handleSelectChange}
            />
          </div>
          <div className='navbar-item'>
            <FilterSelect
              options={[
                { value: 'select', name: 'Cualquier tamaño' },
                { value: '10', name: 'Hotel Pequeño' },
                { value: '20', name: 'Hotel Mediano' },
                { value: '30', name: 'Hotel Grande' },
              ]}
              name='rooms'
              selected={filters.rooms}
              onSelectChange={handleSelectChange}
            />
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <img src={usuario} alt=""/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Filters;