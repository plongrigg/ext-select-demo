import { SelectItem, SelectItemIcon, SelectItemLabel, SelectItems } from '@fgrid-ngx/mat-ext-select';
import { SearchData } from '@fgrid-ngx/mat-searchbox';

const countries = [
  {
    country: 'Afghanistan',
    code: 'AF'
  },
  {
    country: 'Albania',
    code: 'AL'
  },
  {
    country: 'Algeria',
    code: 'DZ'
  },
  {
    country: 'American Samoa',
    code: 'AS'
  },
  {
    country: 'Andorra',
    code: 'AD'
  },
  {
    country: 'Angola',
    code: 'AO'
  },
  {
    country: 'Anguilla',
    code: 'AI'
  },
  {
    country: 'Antarctica',
    code: 'AQ'
  },
  {
    country: 'Antigua and Barbuda',
    code: 'AG'
  },
  {
    country: 'Argentina',
    code: 'AR'
  },
  {
    country: 'Armenia',
    code: 'AM'
  },
  {
    country: 'Aruba',
    code: 'AW'
  },
  {
    country: 'Australia',
    code: 'AU'
  },
  {
    country: 'Austria',
    code: 'AT'
  },
  {
    country: 'Azerbaijan',
    code: 'AZ'
  },
  {
    country: 'Bahamas',
    code: 'BS'
  },
  {
    country: 'Bahrain',
    code: 'BH'
  },
  {
    country: 'Bangladesh',
    code: 'BD'
  },
  {
    country: 'Barbados',
    code: 'BB'
  },
  {
    country: 'Belarus',
    code: 'BY'
  },
  {
    country: 'Belgium',
    code: 'BE'
  },
  {
    country: 'Belize',
    code: 'BZ'
  },
  {
    country: 'Benin',
    code: 'BJ'
  },
  {
    country: 'Bermuda',
    code: 'BM'
  },
  {
    country: 'Bhutan',
    code: 'BT'
  },
  {
    country: 'Bolivia',
    code: 'BO'
  },
  {
    country: 'Bosnia and Herzegovina',
    code: 'BA'
  },
  {
    country: 'Botswana',
    code: 'BW'
  },
  {
    country: 'Bouvet Island',
    code: 'BV'
  },
  {
    country: 'Brazil',
    code: 'BR'
  },
  {
    country: 'British Indian Ocean Territory',
    code: 'IO'
  },
  {
    country: 'Brunei',
    code: 'BN'
  },
  {
    country: 'Bulgaria',
    code: 'BG'
  },
  {
    country: 'Burkina Faso',
    code: 'BF'
  },
  {
    country: 'Burundi',
    code: 'BI'
  },
  {
    country: 'Cambodia',
    code: 'KH'
  },
  {
    country: 'Cameroon',
    code: 'CM'
  },
  {
    country: 'Canada',
    code: 'CA'
  },
  {
    country: 'Cape Verde',
    code: 'CV'
  },
  {
    country: 'Cayman Islands',
    code: 'KY'
  },
  {
    country: 'Central African Republic',
    code: 'CF'
  },
  {
    country: 'Chad',
    code: 'TD'
  },
  {
    country: 'Chile',
    code: 'CL'
  },
  {
    country: 'China',
    code: 'CN'
  },
  {
    country: 'Christmas Island',
    code: 'CX'
  },
  {
    country: 'Cocos (Keeling) Islands',
    code: 'CC'
  },
  {
    country: 'Colombia',
    code: 'CO'
  },
  {
    country: 'Comoros',
    code: 'KM'
  },
  {
    country: 'Congo',
    code: 'CG'
  },
  {
    country: 'Cook Islands',
    code: 'CK'
  },
  {
    country: 'Costa Rica',
    code: 'CR'
  },
  {
    country: 'Croatia',
    code: 'HR'
  },
  {
    country: 'Cuba',
    code: 'CU'
  },
  {
    country: 'Cyprus',
    code: 'CY'
  },
  {
    country: 'Czech Republic',
    code: 'CZ'
  },
  {
    country: 'Denmark',
    code: 'DK'
  },
  {
    country: 'Djibouti',
    code: 'DJ'
  },
  {
    country: 'Dominica',
    code: 'DM'
  },
  {
    country: 'Dominican Republic',
    code: 'DO'
  },
  {
    country: 'East Timor',
    code: 'TP'
  },
  {
    country: 'Ecuador',
    code: 'EC'
  },
  {
    country: 'Egypt',
    code: 'EG'
  },
  {
    country: 'El Salvador',
    code: 'SV'
  },
  {
    country: 'Equatorial Guinea',
    code: 'GQ'
  },
  {
    country: 'Eritrea',
    code: 'ER'
  },
  {
    country: 'Estonia',
    code: 'EE'
  },
  {
    country: 'Ethiopia',
    code: 'ET'
  },
  {
    country: 'Falkland Islands',
    code: 'FK'
  },
  {
    country: 'Faroe Islands',
    code: 'FO'
  },
  {
    country: 'Fiji Islands',
    code: 'FJ'
  },
  {
    country: 'Finland',
    code: 'FI'
  },
  {
    country: 'France',
    code: 'FR'
  },
  {
    country: 'French Guiana',
    code: 'GF'
  },
  {
    country: 'French Polynesia',
    code: 'PF'
  },
  {
    country: 'French Southern territories',
    code: 'TF'
  },
  {
    country: 'Gabon',
    code: 'GA'
  },
  {
    country: 'Gambia',
    code: 'GM'
  },
  {
    country: 'Georgia',
    code: 'GE'
  },
  {
    country: 'Germany',
    code: 'DE'
  },
  {
    country: 'Ghana',
    code: 'GH'
  },
  {
    country: 'Gibraltar',
    code: 'GI'
  },
  {
    country: 'Greece',
    code: 'GR'
  },
  {
    country: 'Greenland',
    code: 'GL'
  },
  {
    country: 'Grenada',
    code: 'GD'
  },
  {
    country: 'Guadeloupe',
    code: 'GP'
  },
  {
    country: 'Guam',
    code: 'GU'
  },
  {
    country: 'Guatemala',
    code: 'GT'
  },
  {
    country: 'Guernsey',
    code: 'GG'
  },
  {
    country: 'Guinea',
    code: 'GN'
  },
  {
    country: 'Guinea-Bissau',
    code: 'GW'
  },
  {
    country: 'Guyana',
    code: 'GY'
  },
  {
    country: 'Haiti',
    code: 'HT'
  },
  {
    country: 'Heard Island and McDonald Islands',
    code: 'HM'
  },
  {
    country: 'Holy See (Vatican City State)',
    code: 'VA'
  },
  {
    country: 'Honduras',
    code: 'HN'
  },
  {
    country: 'Hong Kong',
    code: 'HK'
  },
  {
    country: 'Hungary',
    code: 'HU'
  },
  {
    country: 'Iceland',
    code: 'IS'
  },
  {
    country: 'India',
    code: 'IN'
  },
  {
    country: 'Indonesia',
    code: 'ID'
  },
  {
    country: 'Iran',
    code: 'IR'
  },
  {
    country: 'Iraq',
    code: 'IQ'
  },
  {
    country: 'Ireland',
    code: 'IE'
  },
  {
    country: 'Isle of Man',
    code: 'IM'
  },
  {
    country: 'Israel',
    code: 'IL'
  },
  {
    country: 'Italy',
    code: 'IT'
  },
  {
    country: 'Ivory Coast',
    code: 'CI'
  },
  {
    country: 'Jamaica',
    code: 'JM'
  },
  {
    country: 'Japan',
    code: 'JP'
  },
  {
    country: 'Jersey',
    code: 'JE'
  },
  {
    country: 'Jordan',
    code: 'JO'
  },
  {
    country: 'Kazakhstan',
    code: 'KZ'
  },
  {
    country: 'Kenya',
    code: 'KE'
  },
  {
    country: 'Kiribati',
    code: 'KI'
  },
  {
    country: 'Kuwait',
    code: 'KW'
  },
  {
    country: 'Kyrgyzstan',
    code: 'KG'
  },
  {
    country: 'Laos',
    code: 'LA'
  },
  {
    country: 'Latvia',
    code: 'LV'
  },
  {
    country: 'Lebanon',
    code: 'LB'
  },
  {
    country: 'Lesotho',
    code: 'LS'
  },
  {
    country: 'Liberia',
    code: 'LR'
  },
  {
    country: 'Libyan Arab Jamahiriya',
    code: 'LY'
  },
  {
    country: 'Liechtenstein',
    code: 'LI'
  },
  {
    country: 'Lithuania',
    code: 'LT'
  },
  {
    country: 'Luxembourg',
    code: 'LU'
  },
  {
    country: 'Macao',
    code: 'MO'
  },
  {
    country: 'North Macedonia',
    code: 'MK'
  },
  {
    country: 'Madagascar',
    code: 'MG'
  },
  {
    country: 'Malawi',
    code: 'MW'
  },
  {
    country: 'Malaysia',
    code: 'MY'
  },
  {
    country: 'Maldives',
    code: 'MV'
  },
  {
    country: 'Mali',
    code: 'ML'
  },
  {
    country: 'Malta',
    code: 'MT'
  },
  {
    country: 'Marshall Islands',
    code: 'MH'
  },
  {
    country: 'Martinique',
    code: 'MQ'
  },
  {
    country: 'Mauritania',
    code: 'MR'
  },
  {
    country: 'Mauritius',
    code: 'MU'
  },
  {
    country: 'Mayotte',
    code: 'YT'
  },
  {
    country: 'Mexico',
    code: 'MX'
  },
  {
    country: 'Micronesia, Federated States of',
    code: 'FM'
  },
  {
    country: 'Moldova',
    code: 'MD'
  },
  {
    country: 'Monaco',
    code: 'MC'
  },
  {
    country: 'Mongolia',
    code: 'MN'
  },
  {
    country: 'Montenegro',
    code: 'ME'
  },
  {
    country: 'Montserrat',
    code: 'MS'
  },
  {
    country: 'Morocco',
    code: 'MA'
  },
  {
    country: 'Mozambique',
    code: 'MZ'
  },
  {
    country: 'Myanmar',
    code: 'MM'
  },
  {
    country: 'Namibia',
    code: 'NA'
  },
  {
    country: 'Nauru',
    code: 'NR'
  },
  {
    country: 'Nepal',
    code: 'NP'
  },
  {
    country: 'Netherlands',
    code: 'NL'
  },
  {
    country: 'Netherlands Antilles',
    code: 'AN'
  },
  {
    country: 'New Caledonia',
    code: 'NC'
  },
  {
    country: 'New Zealand',
    code: 'NZ'
  },
  {
    country: 'Nicaragua',
    code: 'NI'
  },
  {
    country: 'Niger',
    code: 'NE'
  },
  {
    country: 'Nigeria',
    code: 'NG'
  },
  {
    country: 'Niue',
    code: 'NU'
  },
  {
    country: 'Norfolk Island',
    code: 'NF'
  },
  {
    country: 'North Korea',
    code: 'KP'
  },
  {
    country: 'Northern Ireland',
    code: 'GB'
  },
  {
    country: 'Northern Mariana Islands',
    code: 'MP'
  },
  {
    country: 'Norway',
    code: 'NO'
  },
  {
    country: 'Oman',
    code: 'OM'
  },
  {
    country: 'Pakistan',
    code: 'PK'
  },
  {
    country: 'Palau',
    code: 'PW'
  },
  {
    country: 'Palestine',
    code: 'PS'
  },
  {
    country: 'Panama',
    code: 'PA'
  },
  {
    country: 'Papua New Guinea',
    code: 'PG'
  },
  {
    country: 'Paraguay',
    code: 'PY'
  },
  {
    country: 'Peru',
    code: 'PE'
  },
  {
    country: 'Philippines',
    code: 'PH'
  },
  {
    country: 'Pitcairn',
    code: 'PN'
  },
  {
    country: 'Poland',
    code: 'PL'
  },
  {
    country: 'Portugal',
    code: 'PT'
  },
  {
    country: 'Puerto Rico',
    code: 'PR'
  },
  {
    country: 'Qatar',
    code: 'QA'
  },
  {
    country: 'Reunion',
    code: 'RE'
  },
  {
    country: 'Romania',
    code: 'RO'
  },
  {
    country: 'Russian Federation',
    code: 'RU'
  },
  {
    country: 'Rwanda',
    code: 'RW'
  },
  {
    country: 'Saint Helena',
    code: 'SH'
  },
  {
    country: 'Saint Kitts and Nevis',
    code: 'KN'
  },
  {
    country: 'Saint Lucia',
    code: 'LC'
  },
  {
    country: 'Saint Pierre and Miquelon',
    code: 'PM'
  },
  {
    country: 'Saint Vincent and the Grenadines',
    code: 'VC'
  },
  {
    country: 'Samoa',
    code: 'WS'
  },
  {
    country: 'San Marino',
    code: 'SM'
  },
  {
    country: 'Sao Tome and Principe',
    code: 'ST'
  },
  {
    country: 'Saudi Arabia',
    code: 'SA'
  },
  {
    country: 'Senegal',
    code: 'SN'
  },
  {
    country: 'Serbia',
    code: 'RS'
  },
  {
    country: 'Seychelles',
    code: 'SC'
  },
  {
    country: 'Sierra Leone',
    code: 'SL'
  },
  {
    country: 'Singapore',
    code: 'SG'
  },
  {
    country: 'Slovakia',
    code: 'SK'
  },
  {
    country: 'Slovenia',
    code: 'SI'
  },
  {
    country: 'Solomon Islands',
    code: 'SB'
  },
  {
    country: 'Somalia',
    code: 'SO'
  },
  {
    country: 'South Africa',
    code: 'ZA'
  },
  {
    country: 'South Georgia and the South Sandwich Islands',
    code: 'GS'
  },
  {
    country: 'South Korea',
    code: 'KR'
  },
  {
    country: 'South Sudan',
    code: 'SS'
  },
  {
    country: 'Spain',
    code: 'ES'
  },
  {
    country: 'Sri Lanka',
    code: 'LK'
  },
  {
    country: 'Sudan',
    code: 'SD'
  },
  {
    country: 'Suriname',
    code: 'SR'
  },
  {
    country: 'Svalbard and Jan Mayen',
    code: 'SJ'
  },
  {
    country: 'Swaziland',
    code: 'SZ'
  },
  {
    country: 'Sweden',
    code: 'SE'
  },
  {
    country: 'Switzerland',
    code: 'CH'
  },
  {
    country: 'Syria',
    code: 'SY'
  },
  {
    country: 'Tajikistan',
    code: 'TJ'
  },
  {
    country: 'Tanzania',
    code: 'TZ'
  },
  {
    country: 'Thailand',
    code: 'TH'
  },
  {
    country: 'The Democratic Republic of Congo',
    code: 'CD'
  },
  {
    country: 'Timor-Leste',
    code: 'TL'
  },
  {
    country: 'Togo',
    code: 'TG'
  },
  {
    country: 'Tokelau',
    code: 'TK'
  },
  {
    country: 'Tonga',
    code: 'TO'
  },
  {
    country: 'Trinidad and Tobago',
    code: 'TT'
  },
  {
    country: 'Tunisia',
    code: 'TN'
  },
  {
    country: 'Turkey',
    code: 'TR'
  },
  {
    country: 'Turkmenistan',
    code: 'TM'
  },
  {
    country: 'Turks and Caicos Islands',
    code: 'TC'
  },
  {
    country: 'Tuvalu',
    code: 'TV'
  },
  {
    country: 'Uganda',
    code: 'UG'
  },
  {
    country: 'Ukraine',
    code: 'UA'
  },
  {
    country: 'United Arab Emirates',
    code: 'AE'
  },
  {
    country: 'United Kingdom',
    code: 'UK'
  },
  {
    country: 'United States',
    code: 'US'
  },
  {
    country: 'United States Minor Outlying Islands',
    code: 'UM'
  },
  {
    country: 'Uruguay',
    code: 'UY'
  },
  {
    country: 'Uzbekistan',
    code: 'UZ'
  },
  {
    country: 'Vanuatu',
    code: 'VU'
  },
  {
    country: 'Venezuela',
    code: 'VE'
  },
  {
    country: 'Vietnam',
    code: 'VN'
  },
  {
    country: 'Virgin Islands, British',
    code: 'VG'
  },
  {
    country: 'Virgin Islands, U.S.',
    code: 'VI'
  },
  {
    country: 'Wallis and Futuna',
    code: 'WF'
  },
  {
    country: 'Western Sahara',
    code: 'EH'
  },
  {
    country: 'Yemen',
    code: 'YE'
  },
  {
    country: 'Zambia',
    code: 'ZM'
  },
  {
    country: 'Zimbabwe',
    code: 'ZW'
  }
];

const populations =
  [
    {
      country: 'Afghanistan',
      population: 37172386
    },
    {
      country: 'Albania',
      population: 2866376
    },
    {
      country: 'Algeria',
      population: 42228429
    },
    {
      country: 'American Samoa',
      population: 55465
    },
    {
      country: 'Andorra',
      population: 77006
    },
    {
      country: 'Angola',
      population: 30809762
    },
    {
      country: 'Anguilla',
      population: 15094
    },
    {
      country: 'Antarctica',
      population: 1106
    },
    {
      country: 'Antigua and Barbuda',
      population: 96286
    },
    {
      country: 'Argentina',
      population: 44494502
    },
    {
      country: 'Armenia',
      population: 2951776
    },
    {
      country: 'Aruba',
      population: 105845
    },
    {
      country: 'Australia',
      population: 24982688
    },
    {
      country: 'Austria',
      population: 8840521
    },
    {
      country: 'Azerbaijan',
      population: 9939800
    },
    {
      country: 'Bahamas',
      population: 385640
    },
    {
      country: 'Bahrain',
      population: 1569439
    },
    {
      country: 'Bangladesh',
      population: 161356039
    },
    {
      country: 'Barbados',
      population: 286641
    },
    {
      country: 'Belarus',
      population: 9483499
    },
    {
      country: 'Belgium',
      population: 11433256
    },
    {
      country: 'Belize',
      population: 383071
    },
    {
      country: 'Benin',
      population: 11485048
    },
    {
      country: 'Bermuda',
      population: 63973
    },
    {
      country: 'Bhutan',
      population: 754394
    },
    {
      country: 'Bolivia',
      population: 11353142
    },
    {
      country: 'Bosnia and Herzegovina',
      population: 3323929
    },
    {
      country: 'Botswana',
      population: 2254126
    },
    {
      country: 'Bouvet Island',
      population: 0
    },
    {
      country: 'Brazil',
      population: 209469333
    },
    {
      country: 'British Indian Ocean Territory',
      population: 0
    },
    {
      country: 'Brunei',
      population: 428962
    },
    {
      country: 'Bulgaria',
      population: 7025037
    },
    {
      country: 'Burkina Faso',
      population: 19751535
    },
    {
      country: 'Burundi',
      population: 11175378
    },
    {
      country: 'Cambodia',
      population: 16249798
    },
    {
      country: 'Cameroon',
      population: 25216237
    },
    {
      country: 'Canada',
      population: 37057765
    },
    {
      country: 'Cape Verde',
      population: 543767
    },
    {
      country: 'Cayman Islands',
      population: 64174
    },
    {
      country: 'Central African Republic',
      population: 4666377
    },
    {
      country: 'Chad',
      population: 15477751
    },
    {
      country: 'Chile',
      population: 18729160
    },
    {
      country: 'China',
      population: 1392730000
    },
    {
      country: 'Christmas Island',
      population: 1402
    },
    {
      country: 'Cocos (Keeling) Islands',
      population: 596
    },
    {
      country: 'Colombia',
      population: 49648685
    },
    {
      country: 'Comoros',
      population: 832322
    },
    {
      country: 'Congo',
      population: 5244363
    },
    {
      country: 'Cook Islands',
      population: 17379
    },
    {
      country: 'Costa Rica',
      population: 4999441
    },
    {
      country: 'Croatia',
      population: 4087843
    },
    {
      country: 'Cuba',
      population: 11338138
    },
    {
      country: 'Cyprus',
      population: 1189265
    },
    {
      country: 'Czech Republic',
      population: 10629928
    },
    {
      country: 'Denmark',
      population: 5793636
    },
    {
      country: 'Djibouti',
      population: 958920
    },
    {
      country: 'Dominica',
      population: 71625
    },
    {
      country: 'Dominican Republic',
      population: 10627165
    },
    {
      country: 'East Timor',
      population: 1267972
    },
    {
      country: 'Ecuador',
      population: 17084357
    },
    {
      country: 'Egypt',
      population: 98423595
    },
    {
      country: 'El Salvador',
      population: 6420744
    },
    {
      country: 'England',
      population: 55619400
    },
    {
      country: 'Equatorial Guinea',
      population: 1308974
    },
    {
      country: 'Eritrea',
      population: 6213972
    },
    {
      country: 'Estonia',
      population: 1321977
    },
    {
      country: 'Ethiopia',
      population: 109224559
    },
    {
      country: 'Falkland Islands',
      population: 2840
    },
    {
      country: 'Faroe Islands',
      population: 48497
    },
    {
      country: 'Fiji Islands',
      population: 883483
    },
    {
      country: 'Finland',
      population: 5515525
    },
    {
      country: 'France',
      population: 66977107
    },
    {
      country: 'French Guiana',
      population: 290691
    },
    {
      country: 'French Polynesia',
      population: 277679
    },
    {
      country: 'French Southern territories',
      population: 0
    },
    {
      country: 'Gabon',
      population: 2119275
    },
    {
      country: 'Gambia',
      population: 2280102
    },
    {
      country: 'Georgia',
      population: 3726549
    },
    {
      country: 'Germany',
      population: 82905782
    },
    {
      country: 'Ghana',
      population: 29767108
    },
    {
      country: 'Gibraltar',
      population: 33718
    },
    {
      country: 'Greece',
      population: 10731726
    },
    {
      country: 'Greenland',
      population: 56025
    },
    {
      country: 'Grenada',
      population: 111454
    },
    {
      country: 'Guadeloupe',
      population: 395700
    },
    {
      country: 'Guam',
      population: 165768
    },
    {
      country: 'Guatemala',
      population: 17247807
    },
    {
      country: 'Guinea',
      population: 12414318
    },
    {
      country: 'Guinea-Bissau',
      population: 1874309
    },
    {
      country: 'Guyana',
      population: 779004
    },
    {
      country: 'Haiti',
      population: 11123176
    },
    {
      country: 'Heard Island and McDonald Islands',
      population: 0
    },
    {
      country: 'Holy See (Vatican City State)',
      population: 825
    },
    {
      country: 'Honduras',
      population: 9587522
    },
    {
      country: 'Hong Kong',
      population: 7451000
    },
    {
      country: 'Hungary',
      population: 9775564
    },
    {
      country: 'Iceland',
      population: 352721
    },
    {
      country: 'India',
      population: 1352617328
    },
    {
      country: 'Indonesia',
      population: 267663435
    },
    {
      country: 'Iran',
      population: 81800269
    },
    {
      country: 'Iraq',
      population: 38433600
    },
    {
      country: 'Ireland',
      population: 4867309
    },
    {
      country: 'Israel',
      population: 8882800
    },
    {
      country: 'Italy',
      population: 60421760
    },
    {
      country: 'Ivory Coast',
      population: 25069229
    },
    {
      country: 'Jamaica',
      population: 2934855
    },
    {
      country: 'Japan',
      population: 126529100
    },
    {
      country: 'Jordan',
      population: 9956011
    },
    {
      country: 'Kazakhstan',
      population: 18272430
    },
    {
      country: 'Kenya',
      population: 51393010
    },
    {
      country: 'Kiribati',
      population: 115847
    },
    {
      country: 'Kuwait',
      population: 4137309
    },
    {
      country: 'Kyrgyzstan',
      population: 6322800
    },
    {
      country: 'Laos',
      population: 7061507
    },
    {
      country: 'Latvia',
      population: 1927174
    },
    {
      country: 'Lebanon',
      population: 6848925
    },
    {
      country: 'Lesotho',
      population: 2108132
    },
    {
      country: 'Liberia',
      population: 4818977
    },
    {
      country: 'Libyan Arab Jamahiriya',
      population: 6678567
    },
    {
      country: 'Liechtenstein',
      population: 37910
    },
    {
      country: 'Lithuania',
      population: 2801543
    },
    {
      country: 'Luxembourg',
      population: 607950
    },
    {
      country: 'Macao',
      population: 631636
    },
    {
      country: 'North Macedonia',
      population: 2084367
    },
    {
      country: 'Madagascar',
      population: 26262368
    },
    {
      country: 'Malawi',
      population: 18143315
    },
    {
      country: 'Malaysia',
      population: 31528585
    },
    {
      country: 'Maldives',
      population: 515696
    },
    {
      country: 'Mali',
      population: 19077690
    },
    {
      country: 'Malta',
      population: 484630
    },
    {
      country: 'Marshall Islands',
      population: 58413
    },
    {
      country: 'Martinique',
      population: 376480
    },
    {
      country: 'Mauritania',
      population: 4403319
    },
    {
      country: 'Mauritius',
      population: 1265303
    },
    {
      country: 'Mayotte',
      population: 270372
    },
    {
      country: 'Mexico',
      population: 126190788
    },
    {
      country: 'Micronesia, Federated States of',
      population: 112640
    },
    {
      country: 'Moldova',
      population: 2706049
    },
    {
      country: 'Monaco',
      population: 38682
    },
    {
      country: 'Mongolia',
      population: 3170208
    },
    {
      country: 'Montenegro',
      population: 631219
    },
    {
      country: 'Montserrat',
      population: 5900
    },
    {
      country: 'Morocco',
      population: 36029138
    },
    {
      country: 'Mozambique',
      population: 29495962
    },
    {
      country: 'Myanmar',
      population: 53708395
    },
    {
      country: 'Namibia',
      population: 2448255
    },
    {
      country: 'Nauru',
      population: 12704
    },
    {
      country: 'Nepal',
      population: 28087871
    },
    {
      country: 'Netherlands',
      population: 17231624
    },
    {
      country: 'Netherlands Antilles',
      population: 227049
    },
    {
      country: 'New Caledonia',
      population: 284060
    },
    {
      country: 'New Zealand',
      population: 4841000
    },
    {
      country: 'Nicaragua',
      population: 6465513
    },
    {
      country: 'Niger',
      population: 22442948
    },
    {
      country: 'Nigeria',
      population: 195874740
    },
    {
      country: 'Niue',
      population: 1624
    },
    {
      country: 'Norfolk Island',
      population: 2169
    },
    {
      country: 'North Korea',
      population: 25549819
    },
    {
      country: 'Northern Ireland',
      population: 1885400
    },
    {
      country: 'Northern Mariana Islands',
      population: 56882
    },
    {
      country: 'Norway',
      population: 5311916
    },
    {
      country: 'Oman',
      population: 4829483
    },
    {
      country: 'Pakistan',
      population: 212215030
    },
    {
      country: 'Palau',
      population: 17907
    },
    {
      country: 'Palestine',
      population: 4569087
    },
    {
      country: 'Panama',
      population: 4176873
    },
    {
      country: 'Papua New Guinea',
      population: 8606316
    },
    {
      country: 'Paraguay',
      population: 6956071
    },
    {
      country: 'Peru',
      population: 31989256
    },
    {
      country: 'Philippines',
      population: 106651922
    },
    {
      country: 'Pitcairn',
      population: 67
    },
    {
      country: 'Poland',
      population: 37974750
    },
    {
      country: 'Portugal',
      population: 10283822
    },
    {
      country: 'Puerto Rico',
      population: 3195153
    },
    {
      country: 'Qatar',
      population: 2781677
    },
    {
      country: 'Reunion',
      population: 859959
    },
    {
      country: 'Romania',
      population: 19466145
    },
    {
      country: 'Russian Federation',
      population: 144478050
    },
    {
      country: 'Rwanda',
      population: 12301939
    },
    {
      country: 'Saint Helena',
      population: 6600
    },
    {
      country: 'Saint Kitts and Nevis',
      population: 52441
    },
    {
      country: 'Saint Lucia',
      population: 181889
    },
    {
      country: 'Saint Pierre and Miquelon',
      population: 5888
    },
    {
      country: 'Saint Vincent and the Grenadines',
      population: 110210
    },
    {
      country: 'Samoa',
      population: 196130
    },
    {
      country: 'San Marino',
      population: 33785
    },
    {
      country: 'Sao Tome and Principe',
      population: 211028
    },
    {
      country: 'Saudi Arabia',
      population: 33699947
    },
    {
      country: 'Scotland',
      population: 5424800
    },
    {
      country: 'Senegal',
      population: 15854360
    },
    {
      country: 'Serbia',
      population: 6963764
    },
    {
      country: 'Seychelles',
      population: 96762
    },
    {
      country: 'Sierra Leone',
      population: 7650154
    },
    {
      country: 'Singapore',
      population: 5638676
    },
    {
      country: 'Slovakia',
      population: 5446771
    },
    {
      country: 'Slovenia',
      population: 2073894
    },
    {
      country: 'Solomon Islands',
      population: 652858
    },
    {
      country: 'Somalia',
      population: 15008154
    },
    {
      country: 'South Africa',
      population: 57779622
    },
    {
      country: 'South Georgia and the South Sandwich Islands',
      population: 30
    },
    {
      country: 'South Korea',
      population: 51606633
    },
    {
      country: 'South Sudan',
      population: 10975920
    },
    {
      country: 'Spain',
      population: 46796540
    },
    {
      country: 'Sri Lanka',
      population: 21670000
    },
    {
      country: 'Sudan',
      population: 41801533
    },
    {
      country: 'Suriname',
      population: 575991
    },
    {
      country: 'Svalbard and Jan Mayen',
      population: 2572
    },
    {
      country: 'Swaziland',
      population: 1136191
    },
    {
      country: 'Sweden',
      population: 10175214
    },
    {
      country: 'Switzerland',
      population: 8513227
    },
    {
      country: 'Syria',
      population: 16906283
    },
    {
      country: 'Tajikistan',
      population: 9100837
    },
    {
      country: 'Tanzania',
      population: 56318348
    },
    {
      country: 'Thailand',
      population: 69428524
    },
    {
      country: 'The Democratic Republic of Congo',
      population: 84068091
    },
    {
      country: 'Togo',
      population: 7889094
    },
    {
      country: 'Tokelau',
      population: 1411
    },
    {
      country: 'Tonga',
      population: 103197
    },
    {
      country: 'Trinidad and Tobago',
      population: 1389858
    },
    {
      country: 'Tunisia',
      population: 11565204
    },
    {
      country: 'Turkey',
      population: 82319724
    },
    {
      country: 'Turkmenistan',
      population: 5850908
    },
    {
      country: 'Turks and Caicos Islands',
      population: 37665
    },
    {
      country: 'Tuvalu',
      population: 11508
    },
    {
      country: 'Uganda',
      population: 42723139
    },
    {
      country: 'Ukraine',
      population: 44622516
    },
    {
      country: 'United Arab Emirates',
      population: 9630959
    },
    {
      country: 'United Kingdom',
      population: 66460344
    },
    {
      country: 'United States',
      population: 326687501
    },
    {
      country: 'United States Minor Outlying Islands',
      population: 300
    },
    {
      country: 'Uruguay',
      population: 3449299
    },
    {
      country: 'Uzbekistan',
      population: 32955400
    },
    {
      country: 'Vanuatu',
      population: 292680
    },
    {
      country: 'Venezuela',
      population: 28870195
    },
    {
      country: 'Vietnam',
      population: 95540395
    },
    {
      country: 'Virgin Islands, British',
      population: 29802
    },
    {
      country: 'Virgin Islands, U.S.',
      population: 106977
    },
    {
      country: 'Wales',
      population: 3139000
    },
    {
      country: 'Wallis and Futuna',
      population: 15289
    },
    {
      country: 'Western Sahara',
      population: 652271
    },
    {
      country: 'Yemen',
      population: 28498687
    },
    {
      country: 'Zambia',
      population: 17351822
    },
    {
      country: 'Zimbabwe',
      population: 14439018
    }
  ].reduce((map, c) => {
    map[c.country] = c.population;
    return map;
  }, {} as Record<string, number>);

// localtion of images (flags)
const baseImageLocation = 'assets';

// merge country with population
export const countryPops = countries.map(country =>
({
  code: country.code,
  country: country.country,
  population: populations[country.country] || 0,
  imageUrl: `${baseImageLocation}/${country.code.toLowerCase()}.svg`
}));

// map to SelectItems
export const selectItems: SelectItems = countryPops.map(cp => {
  const icon: SelectItemIcon = { type: 'svg', id: cp.code, fieldDisplayIconGapPx: 20 };
  const labels: SelectItemLabel[] = [
    { text: cp.country, fontSizePt: 10 },
    { text: `pop. ${cp.population.toLocaleString('en-US', { maximumFractionDigits: 0 })}`, fontSizePt: 8, style: {'font-style': 'italic'} }
  ];
  return { value: cp.code, icon, labels, display: cp.country, selected: cp.code === 'CA' ? true : false };
})
  .reduce((m, item) => {
    m.set(item.value, item);
    return m;
  }, new Map<string | number, SelectItem>());

// Search data
export const searchData: SearchData = countryPops.map(cp => [cp.country, cp.population]);

