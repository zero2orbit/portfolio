import WEATHER from '../../assets/projects_images/WEATHER.png'
import DRUSUPPORT from '../../assets/projects_images/DRUSUPPORT.png'
import API from '../../assets/projects_images/API.jpg'
import DEV from '../../assets/projects_images/DEV.png'
import API2 from '../../assets/projects_images/API2.jpeg'
import API3 from '../../assets/projects_images/API3.png'
import API4 from '../../assets/projects_images/API4.png'
import DRUSIGHT from '../../assets/projects_images/DRUSIGHT.png'
import ETOM from '../../assets/projects_images/ETOM.png'

const data_projects = [
    {
        name: 'Document Processing',
        image: DRUSIGHT,
        deployed_url: 'https://www.drucloud.com/DruSight/',
        //github_url: 'https://www.drucloud.com/DruSight/',
        category: ['springboot', 'opencv']
    },

    {
        name: 'Employee Time & Output Management',
        image: ETOM,
        deployed_url: 'https://www.drubus.com/ETOM/',
        //github_url: '#!',
        category: ['mern']
    },

    {
        name: 'Ticketing System',
        image: DRUSUPPORT,
        deployed_url: 'https://www.drucloud.com/DruSupport/',
        //github_url: '',
        category: ['springboot']
    },

    {
        name: 'Weather App',
        image: WEATHER,
        deployed_url: 'https://node-weatherapp-jay.herokuapp.com',
        github_url: 'https://github.com/zero2orbit/weatherApp',
        category: [ 'mern']
    },

    {
        name: 'Onsite-Services',
        image: API,
        //deployed_url: '!#',
        github_url: 'https://github.com/zero2orbit/onsite-Services',
        category: ['nodejs', 'api']
    },

    {
        name: 'Developer Connector',
        image: DEV,
        //deployed_url: 'http://suprateem.herokuapp.com/',
        github_url: 'https://github.com/zero2orbit/Dev-Connector',
        category: ['mern']
    },

    {
        name: 'Doctor Booking System',
        image: API2,
        deployed_url: 'https://dey-sumit.github.io/NewYear/',
        category: ['springboot', 'api']
    },

    {
        name: 'Auto Invoice Processing',
        image: API3,
        //deployed_url: '!#',
        //github_url: 'https://github.com/Dey-Sumit/color-classification',
        category: ['springboot', 'machine_learning', 'opencv']
    },

    {
        name: 'Intrest Connect',
        image: API4,
        //deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
        //github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
        category: ['nodejs', 'api']
    }
]

export default data_projects;