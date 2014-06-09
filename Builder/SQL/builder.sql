
DELETE FROM sys_template
WHERE uid > 0;

INSERT INTO `sys_template` (`uid`, `pid`, `t3ver_oid`, `t3ver_id`, `t3ver_wsid`, `t3ver_label`, `t3ver_state`, `t3ver_stage`, `t3ver_count`, `t3ver_tstamp`, `t3_origuid`, `tstamp`, `sorting`, `crdate`, `cruser_id`, `title`, `sitetitle`, `hidden`, `starttime`, `endtime`, `root`, `clear`, `include_static_file`, `constants`, `config`, `nextLevel`, `description`, `basedOn`, `deleted`, `includeStaticAfterBasedOn`, `static_file_mode`, `tx_impexp_origuid`) VALUES
	(1, 1, 0, 0, 0, '', 0, 0, 0, 0, 0, 1397208031, 128, 1397046111, 1, 'test.gjo-se.com', 'test.gjo-se.com', 0, 0, 0, 1, 3, 'EXT:css_styled_content/static/',
   '<INCLUDE_TYPOSCRIPT: source="DIR:EXT:gjo_introduction/Configuration/TypoScript/_Constants">', '<INCLUDE_TYPOSCRIPT: source="DIR:EXT:gjo_introduction/Configuration/TypoScript/_Setup">', '', NULL, '', 0, 0, 0, 0);


DELETE FROM backend_layout
WHERE uid > 0;

INSERT INTO `backend_layout` (`uid`, `pid`, `t3ver_oid`, `t3ver_id`, `t3ver_wsid`, `t3ver_label`, `t3ver_state`, `t3ver_stage`, `t3ver_count`, `t3ver_tstamp`, `t3ver_move_id`, `t3_origuid`, `tstamp`, `crdate`, `cruser_id`, `hidden`, `deleted`, `sorting`, `title`, `description`, `config`, `icon`)
VALUES
	(1, 10, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1391158839, 1390989702, 1, 0, 0, 64, 'banded', '',	'<INCLUDE_TYPOSCRIPT: source="DIR:EXT:gjo_introduction/Configuration/TypoScript/BackendLayout/Banded">', ''),
	(2, 10, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1390993933, 1390993933, 1, 0, 0, 128, 'blog', '',	'<INCLUDE_TYPOSCRIPT: source="DIR:EXT:gjo_introduction/Configuration/TypoScript/BackendLayout/Blog">', ''),
	(3, 10, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, 1397216387, 1392045545, 1, 0, 0, 32, 'orbit', '',	'<INCLUDE_TYPOSCRIPT: source="DIR:EXT:gjo_introduction/Configuration/TypoScript/BackendLayout/Orbit">', '');
