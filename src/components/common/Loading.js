import React from 'react';
import { Oval } from 'react-loader-spinner';

import 'styles/common-components/loading.css';

function Loading() {
	return (
		<div className='loading__background'>
			<div className='loading__element'>
				<Oval
					height={60}
					width={60}
					color='#aaaaaa'
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#cccccc'
					strokeWidth={4}
					strokeWidthSecondary={4}
				/>
			</div>
		</div>
	);
}

export default Loading;
