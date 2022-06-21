import Task from '../Learn/Task/Task.js'
import Today from '../Learn/Today/Today'
import Important from '../Learn/Important/Important'
import Plan from '../Learn/Plan/Plan'
import Distributed from '../Learn/Distributed/Distributed'
import Photo from '../Photo/Photo.js'

const routes = [
    {
        path: '/Task',
        element: <Task />,
    },
    {
        path: 'Today',
        element: <Today />
    },
    {
        path: '/',
        element: <Today />
    },
    {
        path: 'Important',
        element: <Important />
    },
    {
        path: 'Plan',
        element: <Plan />
    },
    {
        path: 'Distributed',
        element: <Distributed />
    },

]
export default routes