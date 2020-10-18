import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Home',
		path: '/dashboard',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Courses Enrolled',
		path: '/courses',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},
	{
		title: 'Student Information',
		path: '/studentdetail',
		icon: <FaIcons.FaUserGraduate />,
		cName: 'nav-text'
	},
	{
		title: 'Notifications',
		path: '/notifications',
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: 'nav-text'
	},
	{
		title: 'Team',
		path: '/team',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text'
	},
	{
		title: 'Support',
		path: '/support',
		icon: <IoIcons.IoMdHelpCircle />,
		cName: 'nav-text'
	}
];
