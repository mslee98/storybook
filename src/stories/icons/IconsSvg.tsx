import React, { useState, useEffect } from 'react';

// 아이콘 타입 정의
type IconName = string;

// 아이콘 정보 타입
type IconInfo = {
    name: IconName;
    path: string;
    svgContent: string | null;
};

// 아이콘 경로 매핑
const iconPaths: Record<string, string> = {
    'PlusIcon': '/src/stories/icons/svg-icons/plus.svg',
    'CloseIcon': '/src/stories/icons/svg-icons/close.svg',
    'BoxIcon': '/src/stories/icons/svg-icons/box.svg',
    'CheckCircleIcon': '/src/stories/icons/svg-icons/check-circle.svg',
    'AlertIcon': '/src/stories/icons/svg-icons/alert.svg',
    'InfoIcon': '/src/stories/icons/svg-icons/info.svg',
    'ErrorIcon': '/src/stories/icons/svg-icons/info-error.svg',
    'BoltIcon': '/src/stories/icons/svg-icons/bolt.svg',
    'ArrowUpIcon': '/src/stories/icons/svg-icons/arrow-up.svg',
    'ArrowDownIcon': '/src/stories/icons/svg-icons/arrow-down.svg',
    'FolderIcon': '/src/stories/icons/svg-icons/folder.svg',
    'VideoIcon': '/src/stories/icons/svg-icons/videos.svg',
    'AudioIcon': '/src/stories/icons/svg-icons/audio.svg',
    'GridIcon': '/src/stories/icons/svg-icons/grid.svg',
    'FileIcon': '/src/stories/icons/svg-icons/file.svg',
    'DownloadIcon': '/src/stories/icons/svg-icons/download.svg',
    'ArrowRightIcon': '/src/stories/icons/svg-icons/arrow-right.svg',
    'GroupIcon': '/src/stories/icons/svg-icons/group.svg',
    'BoxIconLine': '/src/stories/icons/svg-icons/box-line.svg',
    'ShootingStarIcon': '/src/stories/icons/svg-icons/shooting-star.svg',
    'DollarLineIcon': '/src/stories/icons/svg-icons/dollar-line.svg',
    'TrashBinIcon': '/src/stories/icons/svg-icons/trash.svg',
    'AngleUpIcon': '/src/stories/icons/svg-icons/angle-up.svg',
    'AngleDownIcon': '/src/stories/icons/svg-icons/angle-down.svg',
    'AngleLeftIcon': '/src/stories/icons/svg-icons/angle-left.svg',
    'AngleRightIcon': '/src/stories/icons/svg-icons/angle-right.svg',
    'PencilIcon': '/src/stories/icons/svg-icons/pencil.svg',
    'CheckLineIcon': '/src/stories/icons/svg-icons/check-line.svg',
    'CloseLineIcon': '/src/stories/icons/svg-icons/close-line.svg',
    'ChevronDownIcon': '/src/stories/icons/svg-icons/chevron-down.svg',
    'ChevronUpIcon': '/src/stories/icons/svg-icons/chevron-up.svg',
    'ChevronLeftIcon': '/src/stories/icons/svg-icons/chevron-left.svg',
    'PaperPlaneIcon': '/src/stories/icons/svg-icons/paper-plane.svg',
    'LockIcon': '/src/stories/icons/svg-icons/lock.svg',
    'EnvelopeIcon': '/src/stories/icons/svg-icons/envelope.svg',
    'UserIcon': '/src/stories/icons/svg-icons/user-line.svg',
    'CalenderIcon': '/src/stories/icons/svg-icons/calender-line.svg',
    'EyeIcon': '/src/stories/icons/svg-icons/eye.svg',
    'EyeCloseIcon': '/src/stories/icons/svg-icons/eye-close.svg',
    'TimeIcon': '/src/stories/icons/svg-icons/time.svg',
    'CopyIcon': '/src/stories/icons/svg-icons/copy.svg',
    'UserCircleIcon': '/src/stories/icons/svg-icons/user-circle.svg',
    'TaskIcon': '/src/stories/icons/svg-icons/task-icon.svg',
    'ListIcon': '/src/stories/icons/svg-icons/list.svg',
    'TableIcon': '/src/stories/icons/svg-icons/table.svg',
    'PageIcon': '/src/stories/icons/svg-icons/page.svg',
    'PieChartIcon': '/src/stories/icons/svg-icons/pie-chart.svg',
    'BoxCubeIcon': '/src/stories/icons/svg-icons/box-cube.svg',
    'PlugInIcon': '/src/stories/icons/svg-icons/plug-in.svg',
    'DocsIcon': '/src/stories/icons/svg-icons/docs.svg',
    'MailIcon': '/src/stories/icons/svg-icons/mail-line.svg',
    'HorizontaLDots': '/src/stories/icons/svg-icons/horizontal-dots.svg',
    'ChatIcon': '/src/stories/icons/svg-icons/chat.svg',
    'MoreDotIcon': '/src/stories/icons/svg-icons/moredot.svg',
    'AlertHexaIcon': '/src/stories/icons/svg-icons/alert-hexa.svg',
    'ErrorHexaIcon': '/src/stories/icons/svg-icons/info-hexa.svg',
};

const IconsSvg = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [copiedIcon, setCopiedIcon] = useState<IconName | null>(null);
    const [iconInfos, setIconInfos] = useState<IconInfo[]>([]);

    // SVG 파일 내용을 가져오는 함수
    const fetchSvgContent = async (path: string): Promise<string> => {
        try {
            const response = await fetch(path);
            const svgContent = await response.text();
            return svgContent;
        } catch (error) {
            console.error('Failed to fetch SVG content:', error);
            return '';
        }
    };

    // 컴포넌트 마운트 시 SVG 내용 로드
    useEffect(() => {
        const loadSvgContents = async () => {
            const iconEntries = await Promise.all(
                Object.entries(iconPaths).map(async ([name, path]) => {
                    const svgContent = await fetchSvgContent(path);
                    return {
                        name,
                        path,
                        svgContent
                    };
                })
            );
            setIconInfos(iconEntries);
        };

        loadSvgContents();
    }, []);

    // 검색 필터링
    const filteredIcons = iconInfos.filter(icon =>
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleIconClick = async (iconInfo: IconInfo) => {
        try {
            // SVG 내용이 있으면 SVG 내용을, 없으면 아이콘 이름을 복사
            const contentToCopy = iconInfo.svgContent || iconInfo.name;
            await navigator.clipboard.writeText(contentToCopy);
            setCopiedIcon(iconInfo.name);
            setTimeout(() => setCopiedIcon(null), 2000);
        } catch (err) {
            console.error('Failed to copy icon content:', err);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent, iconInfo: IconInfo) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleIconClick(iconInfo);
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    // 검색 결과가 없을 때 렌더링
    if (filteredIcons.length === 0 && searchTerm) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                        <p className="text-gray-600 text-lg">
                            "{searchTerm}"에 해당하는 아이콘을 찾을 수 없습니다.
                        </p>
                        <button
                            onClick={handleClearSearch}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            모든 아이콘 보기
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* 헤더 */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        SVG 아이콘 갤러리
                    </h1>
                    <p className="text-gray-600 mb-4">
                        총 {iconInfos.length}개의 아이콘을 확인할 수 있습니다.
                    </p>
                    
                    {/* 검색 입력 */}
                    <div className="relative max-w-md">
                        <input
                            type="text"
                            placeholder="아이콘 이름으로 검색..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            aria-label="아이콘 검색"
                        />
                        <svg
                            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* 결과 카운트 */}
                {searchTerm && (
                    <div className="mb-4 text-sm text-gray-600">
                        "{searchTerm}" 검색 결과: {filteredIcons.length}개
                    </div>
                )}

                {/* 아이콘 그리드 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {filteredIcons.map((iconInfo) => (
                        <div
                            key={iconInfo.name}
                            onClick={() => handleIconClick(iconInfo)}
                            onKeyDown={(e) => handleKeyDown(e, iconInfo)}
                            className={`
                                group relative p-4 bg-white rounded-lg border border-gray-200 
                                hover:border-blue-300 hover:shadow-md transition-all duration-200 
                                cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500
                                ${copiedIcon === iconInfo.name ? 'ring-2 ring-green-500 border-green-300' : ''}
                            `}
                            tabIndex={0}
                            aria-label={`${iconInfo.name} 아이콘 - 클릭하여 SVG 코드 복사`}
                            role="button"
                        >
                            {/* 아이콘 */}
                            <div className="flex justify-center items-center h-12 mb-2">
                                <img 
                                    src={iconInfo.path}
                                    alt={`${iconInfo.name} icon`}
                                    className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" 
                                    aria-hidden="true"
                                />
                            </div>
                            
                            {/* 아이콘 이름 */}
                            <p className="text-xs text-center text-gray-600 group-hover:text-gray-900 truncate">
                                {iconInfo.name}
                            </p>
                            
                            {/* 복사 성공 표시 */}
                            {copiedIcon === iconInfo.name && (
                                <div className="absolute inset-0 flex items-center justify-center bg-green-50 rounded-lg">
                                    <div className="text-green-600 text-xs font-medium">
                                        SVG 복사됨!
                                    </div>
                                </div>
                            )}
                            
                            {/* 호버 시 복사 힌트 */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                    SVG 코드 복사
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconsSvg;