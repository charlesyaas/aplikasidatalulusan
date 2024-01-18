import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

import IndexLayout from 'layouts/IndexLayout';
import MainLayout from 'layouts/MainLayout';
import AuthRoutes from 'components/AuthRoutes';
import IndexPage from 'pages/index/IndexPage';
import AkunList from 'pages/akun/List';
import AkunView from 'pages/akun/View';
import AkunAdd from 'pages/akun/Add';
import AkunEdit from 'pages/akun/Edit';
import PesertaList from 'pages/peserta/List';
import PesertaView from 'pages/peserta/View';
import PesertaAdd from 'pages/peserta/Add';
import PesertaEdit from 'pages/peserta/Edit';
import AccountPages from 'pages/account';
import HomePage from './pages/home/HomePage';
import IndexPages from './pages/index';
import ErrorPages from './pages/errors';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'assets/styles/layout.scss';
const App = () => {
	const auth = useAuth();
	function DefaultPage(){
		if(!auth.isLoggedIn){
			return <IndexPage />
		}
		return <Navigate to="/home" replace />;
	}
	return (
		<Routes>
			<Route exact element={<AuthRoutes />}>
			<Route element={<MainLayout />}>
				<Route path="/home" element={<HomePage />} />
				

				{/* akun pages routes */}
				<Route path="/akun" element={<AkunList />} />
				<Route path="/akun/:fieldName/:fieldValue" element={<AkunList />} />
				<Route path="/akun/index/:fieldName/:fieldValue" element={<AkunList />} />
				<Route path="/akun/view/:pageid" element={<AkunView />} />
				<Route path="/akun/add" element={<AkunAdd />} />
				<Route path="/akun/edit/:pageid" element={<AkunEdit />} />

				{/* peserta pages routes */}
				<Route path="/peserta" element={<PesertaList />} />
				<Route path="/peserta/:fieldName/:fieldValue" element={<PesertaList />} />
				<Route path="/peserta/index/:fieldName/:fieldValue" element={<PesertaList />} />
				<Route path="/peserta/view/:pageid" element={<PesertaView />} />
				<Route path="/peserta/add" element={<PesertaAdd />} />
				<Route path="/peserta/edit/:pageid" element={<PesertaEdit />} />
				<Route path="/account/*" element={<AccountPages />} />
			</Route>
			</Route>
			<Route exact element={<IndexLayout />}>
				<Route path="/" element={<DefaultPage />} />
				<Route path="/*" element={<IndexPages />} />
				<Route path="/error/*" element={<ErrorPages />} />
			</Route>
		</Routes>
	);
}
export default App;
