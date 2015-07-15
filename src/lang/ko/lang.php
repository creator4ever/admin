<?php

return [
	'404'      => '페이지를 찾을 수 없습니다.',
	'auth'     => [
		'title'          => 'Authorization',
		'username'       => 'Username',
		'password'       => 'Password',
		'login'          => '로그인',
		'logout'         => '로그아웃',
		'wrong-username' => '아이디가 틀립니다.',
		'wrong-password' => '또는 비밀번호가 틀립니다.'
	],
	'ckeditor' => [
		'upload'        => [
			'success' => 'File was uploaded: \\n- Size: :size kb \\n- width/height: :width x :height',
			'error'   => [
				'common'              => 'Unable to upload the file.',
				'wrong_extension'     => 'File ":file" has wrong extension.',
				'filesize_limit'      => 'Maximum allowed file size is :size kb.',
				'imagesize_max_limit' => 'Width x Height = :width x :height \\n The maximum Width x Height must be: :maxwidth x :maxheight',
				'imagesize_min_limit' => 'Width x Height = :width x :height \\n The minimum Width x Height must be: :minwidth x :minheight',
			]
		],
		'image_browser' => [
			'title'    => 'Insert image from server',
			'subtitle' => 'Choose image to insert',
		],
	],
	'table'    => [
		'new-entry'      => '새 항목',
		'edit'           => '수정',
		'delete'         => '삭제',
		'delete-confirm' => '정말 삭제하시겠습니까?',
		'delete-error'   => '이 항목을 지우는 데 실패했습니다. 이와 연결된 항목을 먼저 지우셔야합니다.',
		'moveUp'         => '위로 이동',
		'moveDown'       => '아래로 이동',
		'filter'         => '비슷한 항목보기',
		'filter-goto'    => '보기',
		'save'           => '저장',
		'cancel'         => '취소',
		'download'       => '다운로드',
		'all'            => '전부',
		'processing'     => '<i class="fa fa-5x fa-circle-o-notch fa-spin"></i>',
		'loadingRecords' => 'Loading...',
		'lengthMenu'     => '_MENU_ 개씩 보기',
		'zeroRecords'    => '검색 결과가 없습니다.',
		'info'           => 'Showing _START_ to _END_ of _TOTAL_ entries',
		'infoEmpty'      => '0 페이지 총 0 / 0 ',
		'infoFiltered'   => '(filtered from _MAX_ total entries)',
		'infoThousands'  => ',',
		'infoPostFix'    => '',
		'search'         => '검색: ',
		'emptyTable'     => '데이터가 없습니다.',
		'paginate'       => [
			'first'    => 'First',
			'previous' => '&larr;',
			'next'     => '&rarr;',
			'last'     => 'Last'
		]
	],
	'select'   => [
		'nothing'  => 'Nothing selected',
		'selected' => 'selected'
	]
];