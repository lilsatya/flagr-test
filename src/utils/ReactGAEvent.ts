import ReactGA from 'react-ga';

const publishEventABTest = (variant: string, entity: string) => {
  ReactGA.event({
    category: 'Experimental',
    action: `Distribution: ${variant}`,
    label: entity,
    nonInteraction: true,
  });
}

export {
  publishEventABTest,
};
  