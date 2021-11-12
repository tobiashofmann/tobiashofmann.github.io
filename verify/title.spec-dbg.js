describe('sample', function () {

    it('should load the app',function() {
      expect(browser.getTitle()).toBe('OpenUI5 Todo App');
    });
  
    it('should display the todo list',function() {
      element(by.control({
        viewName: 'sap.ui.demo.todo.view.App',
        controlType: 'sap.m.CheckBox',
        bindingPath: 
        {path: "/todos/1"}}))
      .click();
    });
  
    it('should have two items in the list',function() {
      expect(element.all(by.control({
        viewName: 'sap.ui.demo.todo.view.App',
        controlType:'sap.m.CustomListItem'}))
      .count()).toBe(2);
    });
  });
