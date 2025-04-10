import imgLCN from '~/img/lcn.png';
import imgIUH from '~/img/iuh.png';
import web_shoes from '~/img/webshoes.png';
export const dataProject = [
    {
        name: 'Online messaging apps',
        description:
            'This is an application that allows users to connect and communicate with each other online. Users can send messages to each other individually or in groups.',
        img: imgLCN,
        member: 5,
        type: ['Mobile', 'Web'],
        position: ['Member'],
        technology: [
            { type: 'Back-end', detail: ['NodeJS', 'ExpressJS', 'Socket.io', 'JWT', 'AWS S3', 'MongoDB'] },
            { type: 'Front-end', detail: ['ReactJS', 'React Native', 'TailwindCSS', 'Redux toolkit'] },
            { type: 'Deploy', detail: ['Netlify', 'Heroku'] },
        ],
        src: [
            { type: 'Mobile', url: 'https://github.com/thanhjmg/LCNChat' },
            { type: 'Web', url: 'https://github.com/thanhjmg/N14-Web-Social-Network' },
            { type: 'API', url: 'https://github.com/thanhjmg/N14-LCN-API' },
            { type: 'Socket', url: 'https://github.com/thanhjmg/socket-N14-LCN' },
        ],
    },
    {
        name: 'Management Of Student Training According To The Credit System Of The Industrial University Of Ho Chi Minh City',
        description:
            'This is a system to help manage and train students under the credit system. Help students register for courses as well as track learning results',
        img: imgIUH,
        member: 2,
        type: ['Desktop app', 'Web'],
        position: ['Leader'],
        technology: [
            { type: 'Back-end', detail: ['Java', 'Spring boot', 'JWT', 'AWS S3', 'SQL Server'] },
            {
                type: 'Front-end',
                detail: ['ReactJS', 'ElectronJS', 'TailwindCSS', 'Material UI', 'Redux toolkit'],
            },
            { type: 'Deploy', detail: ['Netlify', 'Heroku'] },
        ],
        src: [
            { type: 'Web Sinh viên', url: 'https://github.com/thanhjmg/KLTN_SV' },
            { type: 'Web Giảng viên', url: 'https://github.com/thanhjmg/KLTN_SV' },
            { type: 'App Quản lý', url: 'https://github.com/thanhjmg/QLSV_Desktop_App' },
            { type: 'API', url: 'https://github.com/thanhjmg/QLSV-API' },
        ],
    },

    {
        name: 'Website Selling Soccer Shoes',
        description: 'Ecommerce website with integrated online payment',
        img: web_shoes,
        member: 1,
        type: ['Web'],
        position: ['Leader'],
        technology: [
            { type: 'Back-end', detail: ['NodeJs', 'Cloudinary', 'Postgresql'] },
            {
                type: 'Front-end',
                detail: ['ReactJS', 'TailwindCSS', 'Redux toolkit'],
            },
        ],
        src: [
            { type: 'Web khách hàng', url: 'https://github.com/thanhjmg/2TStore_FE' },
            { type: 'Web quản lý', url: ' https://github.com/thanhjmg/2TStore_QL.git' },
            { type: 'API', url: 'https://github.com/thanhjmg/2TStore_BE' },
        ],
    },
];
