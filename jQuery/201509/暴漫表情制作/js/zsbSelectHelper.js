/**
 * Created by a91566 on 2015-10-14.
 */
//�ж�selectѡ���� �Ƿ����Value="paraValue"��Item
//��selectѡ���� ����һ��Item
//��selectѡ���� ɾ��һ��Item
//ɾ��select��ѡ�е���
//�޸�selectѡ���� value="paraValue"��textΪ"paraText"
//����select��text="paraText"�ĵ�һ��ItemΪѡ��
//����select��value="paraValue"��ItemΪѡ��
//�õ�select�ĵ�ǰѡ�����value
//�õ�select�ĵ�ǰѡ�����text
//�õ�select�ĵ�ǰѡ�����Index
//���select����
//js ����
// 1.�ж�selectѡ���� �Ƿ����Value="paraValue"��Item
function jsSelectIsExitItem(objSelect, objItemValue) {
    var isExit = false;
    for (var i = 0; i < objSelect.options.length; i++) {
        if (objSelect.options[i].value == objItemValue) {
            isExit = true;
            break;
        }
    }
    return isExit;
}

// 2.��selectѡ���� ����һ��Item
function jsAddItemToSelect(objSelect, objItemText, objItemValue) {
    //�ж��Ƿ����
    if (jsSelectIsExitItem(objSelect, objItemValue)) {
        alert("��Item��Valueֵ�Ѿ�����");
    } else {
        var varItem = new Option(objItemText, objItemValue);
        objSelect.options.add(varItem);
    }
}

// 3.��selectѡ���� ɾ��һ��Item
function jsRemoveItemFromSelect(objSelect, objItemValue) {
    //�ж��Ƿ����
    if (jsSelectIsExitItem(objSelect, objItemValue)) {
        for (var i = 0; i < objSelect.options.length; i++) {
            if (objSelect.options[i].value == objItemValue) {
                objSelect.options.remove(i);
                break;
            }
        }
        alert("�ɹ�ɾ��");
    } else {
        alert("��select�� �����ڸ���");
    }
}


// 4.ɾ��select��ѡ�е���
function jsRemoveSelectedItemFromSelect(objSelect) {
    alert("ɾ��");
    var length = objSelect.options.length - 1;
    for(var i = length; i >= 0; i--){
        if(objSelect[i].selected == true){
            objSelect.options[i] = null;
        }
    }
    alert("�ɹ�ɾ��");
}

// 5.�޸�selectѡ���� value="paraValue"��textΪ"paraText"
function jsUpdateItemToSelect(objSelect, objItemText, objItemValue) {
    //�ж��Ƿ����
    if (jsSelectIsExitItem(objSelect, objItemValue)) {
        for (var i = 0; i < objSelect.options.length; i++) {
            if (objSelect.options[i].value == objItemValue) {
                objSelect.options[i].text = objItemText;
                break;
            }
        }
        alert("�ɹ��޸�");
    } else {
        alert("��select�� �����ڸ���");
    }
}

// 6.����select��text="paraText"�ĵ�һ��ItemΪѡ��
function jsSelectItemByValue(objSelect, objItemText) {
    //�ж��Ƿ����
    var isExit = false;
    for (var i = 0; i < objSelect.options.length; i++) {
        if (objSelect.options[i].text == objItemText) {
            objSelect.options[i].selected = true;
            isExit = true;
            break;
        }
    }
    //Show�����
    if (isExit) {
        alert("�ɹ�ѡ��");
    } else {
        alert("��select�� �����ڸ���");
    }
}

// 7.����select��value="paraValue"��ItemΪѡ��
document.all.objSelect.value = objItemValue;

// 8.�õ�select�ĵ�ǰѡ�����value
var currSelectValue = document.all.objSelect.value;

// 9.�õ�select�ĵ�ǰѡ�����text
var currSelectText = document.all.objSelect.options[document.all.objSelect.selectedIndex].text;

// 10.�õ�select�ĵ�ǰѡ�����Index
var currSelectIndex = document.all.objSelect.selectedIndex;

// 11.���select����
document.all.objSelect.options.length = 0;