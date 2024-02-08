import React, { useState } from 'react';
import MappingTool from 'components/MappingTool/Mapping';
import Header from '../../navigation/Header';
import { useLocation } from 'react-router-dom';
import { appPaths } from 'utils/constants';
import './style.css';

const AvailabilityCheck = () => {
  const location = useLocation();
  const pathName = location.pathName.replace(/(^\/|\/$)/g, '');
  const pathRoute = pathName.replace('%20', ' ');
  const segments = pathRoute.split('/').filter(Boolean);
  const resultRoute =
    segments.length > 0 ? segments[segments.length - 1] : null;

  const routes = [
    {
      path: `${appPaths.PROPOSALS}`,
      breadcrumb: 'Plans, Proposals and Contracts',
    },
    { path: `${pathName}`, breadcrumb: ` ${resultRoute}` },
  ];

  const [pageType, setPageType] = useState('AvailabilityCheck');

  return (
    <>
      <Header
        heading='Availability - Avails Check'
        headingLink={'/availability-check'}
      />
      <div className='availability-Check-main'>
        <MappingTool pageType={pageType} />
      </div>
    </>
  );
};

export default AvailabilityCheck;

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extending jest expect functions
import { MemoryRouter } from 'react-router-dom'; // for wrapping components that use useLocation or similar

import AvailabilityCheck from './AvailabilityCheck'; // Adjust the path based on your project structure

// Mocking the components used within AvailabilityCheck
jest.mock('../../navigation/Header', () => () => <div data-testid='header' />);
jest.mock('components/MappingTool/Mapping', () => () => (
  <div data-testid='mapping-tool' />
));

// Mocking the useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathName: '/example-path', // adjust as needed
  }),
}));

describe('AvailabilityCheck component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <AvailabilityCheck />
      </MemoryRouter>
    );
    // You can add more specific assertions based on your component's behavior
    expect(
      document.querySelector('.availability-Check-main')
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-testid="header"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector('[data-testid="mapping-tool"]')
    ).toBeInTheDocument();
  });

  // Add more test cases as needed
});
