import Image from 'next/image';
import React, { useState } from 'react';
import CalenderIcon from '../../../../../Assets/images/dashboard/CalenderIcon';
import QrImage from '../../../../../Assets/images/dashboard/Group 7167.png';
import LeftArrowGray from '../../../../../Assets/images/dashboard/LeftArrowGray';
import RightArrowGray from '../../../../../Assets/images/dashboard/RightArrowGray';
import ThreeDot from '../../../../../Assets/images/dashboard/ThreeDotIcon.svg';
import DeleteMember from '../../../../../Utilities/DeleteMember';
import { SearchBox } from '../../../../../Utilities/Utilites';
import BoxDeatils from './BoxAndDeatils/BoxDeatils';
import CreateAttendenceButton from './BoxAndDeatils/CreateAttendenceButton';
import MainCreateButton from './BoxAndDeatils/MainCreateButton';
import MemberDeatils from './BoxAndDeatils/MemberDeatils';
import StyleSheet from './Main.module.css';
import AttendenceEditPopup from './PopupBox/AttendenceEditPopup';
import AttendenceEmployee from './PopupBox/AttendenceEmployee';
import AttendencePopupForm from './PopupBox/AttendencePopupForm';

function EmployeeAttendence() {
    const [attendencePopupForm, setAttendencesPopupForm] = useState(false);
    const [attendenceEmployee, setAttendenceEmployee] = useState(false);
    const [attendenceEditPopup, setAttendenceEditPopup] = useState(false);
    const [attendenceDeletePopup, setAttendenceDeletePopup] = useState(false);
    const [attendenceMemberDeatils, setAttendenceMemberDeatils] = useState(false);

    return (
        <>
            <MainCreateButton setAttendencesPopupForm={setAttendencesPopupForm} />
            {attendencePopupForm && (
                <AttendencePopupForm
                    setAttendencesPopupForm={setAttendencesPopupForm}
                    attendencePopupForm={attendencePopupForm}
                    setAttendenceEmployee={setAttendenceEmployee}
                />
            )}
            {attendenceEmployee && (
                <AttendenceEmployee
                    setAttendencesPopupForm={setAttendencesPopupForm}
                    setAttendenceEmployee={setAttendenceEmployee}
                    attendenceEmployee={attendenceEmployee}
                />
            )}

            {attendenceEditPopup && (
                <AttendenceEditPopup
                    attendenceEditPopup={attendenceEditPopup}
                    setAttendenceEditPopup={setAttendenceEditPopup}
                />
            )}
            {attendenceDeletePopup && (
                <DeleteMember
                    setDeleteMember={setAttendenceDeletePopup}
                    deleteMember={attendenceDeletePopup}
                    actions={() => {}}
                />
            )}
            {attendenceMemberDeatils && (
                <MemberDeatils setAttendenceMemberDeatils={setAttendenceMemberDeatils} />
            )}

            <div className={StyleSheet.box__container}>
                <CreateAttendenceButton
                    timeSetPopup={setAttendencesPopupForm}
                    selectedEmployee={setAttendenceEmployee}
                />

                <div className={StyleSheet.box__container__search__box}>
                    <SearchBox
                        placeholder={'Search By  Name Or Id......'}
                        style={{ background: '#f5f5f5', paddingBottom: '.5vw', paddingTop: '.5vw' }}
                    />
                </div>

                <div className={StyleSheet.box__calender__header__container}>
                    <div className={StyleSheet.box__calender__header__container__calender}>
                        <div
                            className={StyleSheet.box__calender__header__container__calender__main}>
                            <div className={StyleSheet.icon}>
                                <CalenderIcon />
                            </div>
                            <div className={StyleSheet.button__and__date}>
                                <div className={StyleSheet.button__and__date__left__button}>
                                    <LeftArrowGray />
                                </div>
                                <div className={StyleSheet.button__and__date__date}>
                                    Sep 13th,2021
                                </div>
                                <div className={StyleSheet.button__and__date__right__button}>
                                    <RightArrowGray />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={StyleSheet.box__calender__header__container__qr__code__and__dot}>
                        <div className={StyleSheet.qr__code}>
                            <div className={StyleSheet.qr__code__title}>
                                Attendence With Qr Code
                            </div>
                            <div className={StyleSheet.qr__image}>
                                <Image width={'100%'} height={'100%'} src={QrImage} alt="" />
                            </div>
                        </div>
                        <div className={StyleSheet.three__dot__icon}>
                            <Image width={'100%'} height={'100%'} src={ThreeDot} alt="Three Dot" />
                        </div>
                    </div>
                </div>

                <div className={StyleSheet.employee__container}>
                    <div>
                        <div className={StyleSheet.employee__main__container}>
                            <div className={StyleSheet.employee__main__container__header}>
                                <ul>
                                    <li>Employee Name</li>
                                    <li>Starting Time</li>
                                    <li>Ending Time</li>
                                    <li>Break Time</li>
                                    <li>Today Status</li>
                                    <li>Today Overtime</li>
                                    <li>Total Hour</li>
                                </ul>
                            </div>

                            <div className={StyleSheet.employee__main__container__body}>
                                <BoxDeatils
                                    setAttendenceEditPopup={setAttendenceEditPopup}
                                    setAttendenceDeletePopup={setAttendenceDeletePopup}
                                    setAttendenceMemberDeatils={setAttendenceMemberDeatils}
                                />
                                <BoxDeatils />
                                <BoxDeatils />
                                <BoxDeatils />
                                <BoxDeatils />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default React.memo(EmployeeAttendence);
