export const TRAIN_OPTION = Object.freeze({
	DATE: '날짜',
	TIME: '출발 시각',
	DEPART: '출발',
	ARRIVE: '도착',
	DEPART_ENG: 'depart',
	ARRIVE_ENG: 'arrive',
	BUS: '버스',
	TRAIN: '기차',
	MILYANG: '밀양',
	BUSAN: '부산',
});

export const SLIDE_INFO = {
	LENGTH: 3,
	DELAY: 3,
	DETAILS: [
		{
			type: 0,
			link: '/train',
			content: '환승 시간표 확인하기',
		},
		{
			type: 1,
			link: '/bus',
			content: '버스 시간표 확인하기',
		},
	],
};

export const TRAIN_OPTION_EXPLAIN = Object.freeze({
	DATE: '출발하길 원하는 날짜를 선택해주세요.',
	TIME: `출발하길 원하는 시각을 선택해주세요. 캠퍼스에서 출발하는 경우 버스가 출발하기 원하는 시각을 골라주세요.`,
});

export const STATIONS = {
	POPULAR_LABEL: '자주 찾는 역',
	ALL_LABEL: '역',
	POPULAR: [
		{ name: '서울' },
		{ name: '부산' },
		{ name: '밀양' },
		{ name: '동대구' },
	],
	ALL: [
		{ name: '서울' },
		{ name: '부산' },
		{ name: '밀양' },
		{ name: '동대구' },
		{ name: '동대구' },
	],
};

export const MAP_OPTIONS = {
	INIT_PLACE: '부산대학교 밀양캠퍼스',
	MAP_INIT_LAT: 35.45373762287106,
	MAP_INIT_LNG: 128.806692348998,
	MAP_LEVEL: 5,
	RESULT_MAP_LEVEL: 7,
};

export const BUS_SCHEDULE = {
	station: {
		weekday: [
			{ ID: 1, hour: '07', time1: '07:02', time2: '07:18', time3: '07:25' },
			{ ID: 2, hour: '07', time1: '07:20', time2: '07:32', time3: '07:39' },
			{ ID: 3, hour: '07', time1: '07:37', time2: '07:56', time3: '08:03' },
			{ ID: 4, hour: '08', time1: '08:40', time2: '08:52', time3: '08:59' },
			{ ID: 5, hour: '08', time1: '08:57', time2: '09:12', time3: '09:19' },
			{ ID: 6, hour: '09', time1: '09:06', time2: '09:20', time3: '09:27' },
			{ ID: 7, hour: '09', time1: '09:46', time2: '10:00', time3: '10:07' },
			{ ID: 7, hour: '09', time1: '09:58', time2: '10:12', time3: '10:19' },
			{ ID: 7, hour: '10', time1: '10:16', time2: '10 30', time3: '' },
			{ ID: 7, hour: '10', time1: '10:38', time2: '10 52', time3: '10:59' },
			{ ID: 7, hour: '13', time1: '12:00', time2: '12 16', time3: '12:23' },
			{ ID: 7, hour: '12', time1: '12:18', time2: '12 34', time3: '12:41' },
			{ ID: 7, hour: '13', time1: '13:05', time2: '13 16', time3: '13:23' },
			{ ID: 7, hour: '13', time1: '13:28', time2: '13 44', time3: '13:51' },
			{ ID: 7, hour: '13', time1: '13:50', time2: '14 00', time3: '14:07' },
			{ ID: 7, hour: '14', time1: '14:30', time2: '14 40', time3: '14:47' },
			{ ID: 7, hour: '15', time1: '15:20', time2: '15 30', time3: '' },
			{ ID: 7, hour: '15', time1: '15:28', time2: '15 44', time3: '15:51' },
			{ ID: 7, hour: '15', time1: '15:52', time2: '16 00', time3: '16:07' },
			{ ID: 7, hour: '16', time1: '16:19', time2: '16 28', time3: '' },
			{ ID: 7, hour: '17', time1: '17:02', time2: '17 16', time3: '17:23' },
			{ ID: 7, hour: '17', time1: '17:42', time2: '17 56', time3: '18:03' },
			{ ID: 7, hour: '17', time1: '17:58', time2: '18 08', time3: '18:15' },
			{ ID: 7, hour: '18', time1: '18:22', time2: '18 32', time3: '18:39' },
			{ ID: 7, hour: '18', time1: '18:42', time2: '19 00', time3: '19:07' },
			{ ID: 7, hour: '19', time1: '19:08', time2: '19 24', time3: '19:31' },
			{ ID: 7, hour: '19', time1: '19:42', time2: '19 50', time3: '19:57' },
			{ ID: 7, hour: '20', time1: '20:04', time2: '20 18', time3: '20:25' },
			{ ID: 7, hour: '20', time1: '20:20', time2: '20 30', time3: '20:37' },
			{ ID: 7, hour: '20', time1: '20:57', time2: '21 07', time3: '21:14' },
			{ ID: 7, hour: '21', time1: '21:17', time2: '21 28', time3: '' },
			{ ID: 7, hour: '22', time1: '22:12', time2: '22 24', time3: '22:31' },
			{ ID: 7, hour: '22', time1: '22:44', time2: '23 00', time3: '23:07' },
			{ ID: 7, hour: '23', time1: '23:12', time2: '23 20', time3: '23:27' },
		],
		holiday: [
			{ ID: 14, hour: '07', time1: '07:02', time2: '07:18', time3: '07:25' },
			{ ID: 15, hour: '07', time1: '07:20', time2: '07:32', time3: '07:39' },
			{ ID: 16, hour: '07', time1: '07:37', time2: '07:56', time3: '08:03' },
			{ ID: 17, hour: '08', time1: '08:39', time2: '08:52', time3: '08:59' },
			{ ID: 17, hour: '08', time1: '08:57', time2: '09:12', time3: '09:19' },
			{ ID: 18, hour: '09', time1: '09:46', time2: '10:00', time3: '10:07' },
			{ ID: 19, hour: '10', time1: '10:38', time2: '10:52', time3: '10:59' },
			{ ID: 17, hour: '12', time1: '12:18', time2: '12:34', time3: '12:41' },
			{ ID: 17, hour: '13', time1: '13:28', time2: '13:44', time3: '13:51' },
			{ ID: 17, hour: '13', time1: '13:50', time2: '14:00', time3: '14:07' },
			{ ID: 17, hour: '15', time1: '15:28', time2: '15:44', time3: '15:51' },
			{ ID: 17, hour: '15', time1: '15:52', time2: '16:00', time3: '16:07' },
			{ ID: 17, hour: '17', time1: '17:02', time2: '17:16', time3: '17:23' },
			{ ID: 17, hour: '17', time1: '17:42', time2: '17:56', time3: '18:03' },
			{ ID: 17, hour: '18', time1: '18:42', time2: '19:00', time3: '19:07' },
			{ ID: 17, hour: '18', time1: '18:22', time2: '18:32', time3: '18:39' },
			{ ID: 17, hour: '19', time1: '19:08', time2: '19:24', time3: '19:31' },
			{ ID: 17, hour: '20', time1: '20:04', time2: '20:18', time3: '20:25' },
			{ ID: 17, hour: '22', time1: '22:44', time2: '23:00', time3: '23:07' },
		],
		vacation: [
			{ ID: 20, hour: '07', time1: '07:20', time2: '07:35', time3: '07:42' },
			{ ID: 21, hour: '08', time1: '08:40', time2: '09:05', time3: '09:12' },
			{ ID: 22, hour: '08', time1: '08:57', time2: '09:10', time3: '09:17' },
			{ ID: 23, hour: '10', time1: '10:38', time2: '10:55', time3: '11:02' },
			{ ID: 24, hour: '12', time1: '12:18', time2: '12:40', time3: '12:47' },
			{ ID: 25, hour: '13', time1: '13:28', time2: '13:45', time3: '13:52' },
			{ ID: 25, hour: '15', time1: '15:28', time2: '15:45', time3: '15:52' },
			{ ID: 25, hour: '15', time1: '15:47', time2: '16:00', time3: '16:07' },
			{ ID: 25, hour: '17', time1: '17:02', time2: '17:15', time3: '17:22' },
			{ ID: 25, hour: '17', time1: '17:42', time2: '18:00', time3: '18:07' },
			{ ID: 25, hour: '18', time1: '18:20', time2: '18:30', time3: '18:37' },
			{ ID: 25, hour: '19', time1: '18:42', time2: '18:55', time3: '19:02' },
			{ ID: 25, hour: '20', time1: '19:08', time2: '19:24', time3: '19:31' },
			{ ID: 25, hour: '20', time1: '20:04', time2: '20:18', time3: '20:25' },
			{ ID: 25, hour: '21', time1: '21:34', time2: '21:44', time3: '21:51' },
			{ ID: 25, hour: '22', time1: '22:38', time2: '22:50', time3: '22:57' },
		],
	},
	campus: {
		weekday: [
			{ ID: 1, hour: '06', time1: '06:14', time2: '06:45', time3: '06:57분' },
			{ ID: 2, hour: '07', time1: ' ', time2: '07:00', time3: '07:32' },
			{ ID: 3, hour: '07', time1: '06:19', time2: '07:20', time3: '07:32' },
			{ ID: 4, hour: '08', time1: '08:10', time2: '08:20', time3: '08:32' },
			{ ID: 5, hour: '08', time1: '08:33', time2: '08:45', time3: '08:53' },
			{ ID: 6, hour: '08', time1: '08:45', time2: '08:56', time3: '09:04' },
			{ ID: 7, hour: '09', time1: '09:25', time2: '09:35', time3: '09:43' },
			{ ID: 8, hour: '09', time1: '09:41', time2: '09:48', time3: '09:56' },
			{ ID: 9, hour: '10', time1: '09:53', time2: '10:05', time3: '10:13' },
			{ ID: 10, hour: '10', time1: '10:15', time2: '10:22', time3: '10:32' },
			{ ID: 11, hour: '11', time1: ' ', time2: '11:26', time3: '11:38' },
			{
				ID: 12,
				hour: '11',
				time1: '11시 33분',
				time2: '11시 48분',
				time3: '11시 56분',
			},
			{ ID: 13, hour: '12', time1: ' ', time2: '12:36', time3: '12:48' },
			{ ID: 14, hour: '12', time1: '12:41', time2: '12:50', time3: '13:02' },
			{ ID: 15, hour: '13', time1: '13:29', time2: '13:36', time3: '13:48' },
			{ ID: 16, hour: '14', time1: '14:05', time2: '14:17', time3: '14:29' },
			{ ID: 17, hour: '14', time1: ' ', time2: '14:36', time3: '14:48' },
			{ ID: 18, hour: '15', time1: '14:53', time2: '15:05', time3: '15:17' },
			{ ID: 19, hour: '15', time1: '15:29', time2: '15:40', time3: '15:52' },
			{ ID: 20, hour: '16', time1: '15:53', time2: '16:00', time3: '16:17' },
			{ ID: 21, hour: '16', time1: '16:33', time2: '16:42', time3: '16:54' },
			{ ID: 22, hour: '17', time1: '17:15', time2: '17:23', time3: '17:35' },
			{ ID: 23, hour: '17', time1: '17:29', time2: '17:44', time3: '17:56' },
			{ ID: 24, hour: '17', time1: ' ', time2: '17:45', time3: '17:57' },
			{ ID: 25, hour: '18', time1: '17:57', time2: '18:10', time3: '18:22' },
			{ ID: 26, hour: '18', time1: '18:37', time2: '18:45', time3: '18:57' },
			{ ID: 27, hour: '19', time1: '19:17', time2: '19:30', time3: '19:42' },
			{ ID: 28, hour: '19', time1: '19:35', time2: '19:44', time3: '19:56' },
			{ ID: 29, hour: '20', time1: '20:01', time2: '20:08', time3: '20:20' },
			{ ID: 30, hour: '20', time1: '20:35', time2: '20:45', time3: '20:57' },
			{ ID: 31, hour: '21', time1: '20:53', time2: '21:05', time3: '21:17' },
			{ ID: 32, hour: '21', time1: '21:50', time2: '21:57', time3: '22:09' },
			{ ID: 33, hour: '22', time1: '22:13', time2: '22:22', time3: '22:34' },
			{ ID: 34, hour: '23', time1: '22:53', time2: '23:00', time3: '23:12' },
		],
		holiday: [
			{ ID: 13, hour: '06', time1: '06:14', time2: '06:45', time3: '06:57' },
			{ ID: 14, hour: '07', time1: ' ', time2: '07:00', time3: '07:12' },
			{ ID: 15, hour: '07', time1: '06:19', time2: '07:20', time3: '07:32' },
			{ ID: 16, hour: '08', time1: '08:10', time2: '08:17', time3: '08:29' },
			{ ID: 17, hour: '08', time1: '08:33', time2: '08:45', time3: '08:53' },
			{ ID: 18, hour: '09', time1: '09:25', time2: '09:35', time3: '09:43' },
			{ ID: 18, hour: '10', time1: '10:15', time2: '10:22', time3: '10:32' },
			{ ID: 18, hour: '11', time1: ' ', time2: '11:26', time3: '11:38' },
			{ ID: 18, hour: '12', time1: ' ', time2: '12:36', time3: '12:48' },
			{ ID: 18, hour: '13', time1: '13:29', time2: '13:36', time3: '13:48' },
			{ ID: 18, hour: '14', time1: ' ', time2: '14:36', time3: '14:48' },
			{ ID: 18, hour: '15', time1: '15:29', time2: '15:40', time3: '15:52' },
			{ ID: 18, hour: '16', time1: '16:33', time2: '16:42', time3: '16:54' },
			{ ID: 18, hour: '17', time1: '17:15', time2: '17:23', time3: '17:35' },
			{ ID: 18, hour: '17', time1: ' ', time2: '17:45', time3: '17:57' },
			{ ID: 18, hour: '18', time1: '17:57', time2: '18:10', time3: '18:22' },
			{ ID: 18, hour: '18', time1: '18:37', time2: '18:45', time3: '18:57' },
			{ ID: 18, hour: '19', time1: '19:35', time2: '19:44', time3: '19:56' },
			{ ID: 18, hour: '22', time1: '22:13', time2: '22:22', time3: '22:34' },
		],
		vacation: [
			{ ID: 19, hour: '07', time1: ' ', time2: '07:00', time3: '07:12분' },
			{ ID: 20, hour: '08', time1: '08:10', time2: '08:20', time3: '08:32' },
			{ ID: 21, hour: '08', time1: '08:34', time2: '08:45', time3: '08:53' },
			{ ID: 22, hour: '10', time1: '10:15', time2: '10:22', time3: '10:32' },
			{ ID: 23, hour: '11', time1: ' ', time2: '11:26', time3: '11:38' },
			{ ID: 24, hour: '12', time1: ' ', time2: '12:36', time3: '12:48' },
			{ ID: 24, hour: '14', time1: ' ', time2: '14:36', time3: '14:48' },
			{ ID: 24, hour: '15', time1: '15:24', time2: '15:32', time3: '15:44' },
			{ ID: 24, hour: '16', time1: '16:34', time2: '16:42', time3: '16:54' },
			{ ID: 24, hour: '17', time1: '17:06', time2: '17:23', time3: '17:35' },
			{ ID: 24, hour: '17', time1: ' ', time2: '17:45', time3: '17:57' },
			{ ID: 24, hour: '18', time1: '17:49', time2: '18:06', time3: '18:18' },
			{ ID: 24, hour: '18', time1: '18:34', time2: '18:45', time3: '18:57' },
			{ ID: 24, hour: '19', time1: '19:35', time2: '19:44', time3: '19:56' },
			{ ID: 24, hour: '20', time1: '20:11', time2: '20:24', time3: '20:36' },
			{ ID: 24, hour: '21', time1: '20:59', time2: '21:20', time3: '21:32' },
			{ ID: 24, hour: '22', time1: '22:04', time2: '22:18', time3: '22:30' },
		],
	},
};
export const ALERT_MESSAGE = Object.freeze({
	NO_FIND_STATION: '찾는 역이 없습니다.',
	SELECT_STATION:
		'버스를 탈 정류장을 선택하여 버스 도착 예정시간을 알아보세요.',
	SELECT_PLACE: '원하는 지점을 선택해주세요',
	ERROR_MESSAGE: `네트워크가 원활하지 않습니다. \n 다시 시도해주세요`,
});
