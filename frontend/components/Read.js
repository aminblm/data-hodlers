import firebase from 'firebase/compat/app'
import initFirebase from '../lib/initFirebase'
import 'firebase/compat/firestore'

function Read() {
    initFirebase() // initialize firebase

    const datasetsRef = firebase.firestore().collection('datasets');

    const readData = async () => {
        try {
            console.log(await datasetsRef.get());
            // alert('Data was successfully fetched from cloud firestore! Close this alert and check console for output.')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <button type="button" onClick={readData} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read Data From Cloud Firestore</button>
    )
}

export default Read
