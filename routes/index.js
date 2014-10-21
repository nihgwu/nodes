/**
 * @fileOverview
 * @author rekey
 * Created by rekey on 21/10/14.
 */

app.get('/', function *(next) {
  yield this.render('pages/index', {}, true);
});